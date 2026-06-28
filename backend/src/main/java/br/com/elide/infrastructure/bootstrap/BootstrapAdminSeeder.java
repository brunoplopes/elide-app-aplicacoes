package br.com.elide.infrastructure.bootstrap;

import br.com.elide.domain.model.Enums.RoleName;
import br.com.elide.infrastructure.persistence.RoleEntity;
import br.com.elide.infrastructure.persistence.UserEntity;
import br.com.elide.infrastructure.persistence.repository.RoleRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;

@Component
public class BootstrapAdminSeeder implements ApplicationRunner {
    private final RoleRepository roles;
    private final UserRepository users;
    private final PasswordEncoder passwordEncoder;
    private final String username;
    private final String password;
    private final boolean enabled;

    public BootstrapAdminSeeder(
        RoleRepository roles,
        UserRepository users,
        PasswordEncoder passwordEncoder,
        @Value("${elide.bootstrap.admin-username}") String username,
        @Value("${elide.bootstrap.admin-password}") String password,
        @Value("${elide.bootstrap.enabled}") boolean enabled
    ) {
        this.roles = roles;
        this.users = users;
        this.passwordEncoder = passwordEncoder;
        this.username = username;
        this.password = password;
        this.enabled = enabled;
    }

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        Arrays.stream(RoleName.values()).forEach(roleName -> roles.findByName(roleName).orElseGet(() -> {
            var role = new RoleEntity();
            role.setName(roleName);
            return roles.save(role);
        }));

        if (!enabled || users.existsByUsername(username)) {
            return;
        }

        var masterRole = roles.findByName(RoleName.MASTER_ADMIN).orElseThrow();
        var admin = new UserEntity();
        admin.setUsername(username);
        admin.setEmail(username + "@elide.local");
        admin.setFullName("Administrador Master ELIDE");
        admin.setPasswordHash(passwordEncoder.encode(password));
        admin.setMustChangePassword(true);
        admin.getRoles().add(masterRole);
        users.save(admin);
    }
}

