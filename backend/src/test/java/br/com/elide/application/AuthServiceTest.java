package br.com.elide.application;

import br.com.elide.application.dto.AuthDtos.RegisterRequest;
import br.com.elide.domain.model.Enums.RoleName;
import br.com.elide.infrastructure.persistence.RoleEntity;
import br.com.elide.infrastructure.persistence.UserEntity;
import br.com.elide.infrastructure.persistence.CustomerEntity;
import br.com.elide.infrastructure.persistence.repository.CustomerRepository;
import br.com.elide.infrastructure.persistence.repository.RefreshTokenRepository;
import br.com.elide.infrastructure.persistence.repository.RoleRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import br.com.elide.infrastructure.security.JwtService;
import br.com.elide.infrastructure.security.SecurityProperties;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class AuthServiceTest {
    @Test
    void registersCustomerWithBCryptHash() {
        var authenticationManager = mock(AuthenticationManager.class);
        var jwtService = mock(JwtService.class);
        var users = mock(UserRepository.class);
        var customers = mock(CustomerRepository.class);
        var roles = mock(RoleRepository.class);
        var refreshTokens = mock(RefreshTokenRepository.class);
        var encoder = new BCryptPasswordEncoder(12);
        var service = new AuthService(authenticationManager, jwtService, users, customers, roles, refreshTokens, encoder, new SecurityProperties("x".repeat(64), 30, 14, List.of("*")));
        var customerRole = new RoleEntity();
        customerRole.setName(RoleName.CUSTOMER);

        when(roles.findByName(RoleName.CUSTOMER)).thenReturn(Optional.of(customerRole));
        when(users.save(any())).thenAnswer(invocation -> invocation.getArgument(0));
        when(customers.save(any())).thenAnswer(invocation -> invocation.getArgument(0));
        when(refreshTokens.save(any())).thenAnswer(invocation -> invocation.getArgument(0));
        when(jwtService.issueAccessToken(any())).thenReturn("jwt");

        var response = service.registerCustomer(new RegisterRequest("ana", "ana@elide.test", "secret123", "Ana Cliente"));

        var captor = ArgumentCaptor.forClass(UserEntity.class);
        var customerCaptor = ArgumentCaptor.forClass(CustomerEntity.class);
        verify(users).save(captor.capture());
        verify(customers).save(customerCaptor.capture());
        assertThat(response.accessToken()).isEqualTo("jwt");
        assertThat(response.roles()).contains("CUSTOMER");
        assertThat(captor.getValue().getPasswordHash()).startsWith("$2");
        assertThat(encoder.matches("secret123", captor.getValue().getPasswordHash())).isTrue();
        assertThat(customerCaptor.getValue().getUser().getUsername()).isEqualTo("ana");
    }
}
