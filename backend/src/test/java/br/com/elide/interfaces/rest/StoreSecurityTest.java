package br.com.elide.interfaces.rest;

import br.com.elide.application.StoreManagementService;
import br.com.elide.infrastructure.config.SecurityConfig;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import br.com.elide.infrastructure.security.ElideUserDetailsService;
import br.com.elide.infrastructure.security.JwtAuthenticationFilter;
import br.com.elide.infrastructure.security.JwtService;
import br.com.elide.infrastructure.security.MustChangePasswordFilter;
import br.com.elide.infrastructure.security.RateLimitFilter;
import br.com.elide.infrastructure.security.SecurityProperties;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StorePortalController.class)
@Import({SecurityConfig.class, RateLimitFilter.class, JwtAuthenticationFilter.class, MustChangePasswordFilter.class})
class StoreSecurityTest {
    @Autowired
    MockMvc mvc;

    @MockitoBean
    UserRepository users;

    @MockitoBean
    StoreRepository stores;

    @MockitoBean
    StoreManagementService storeManagementService;

    @MockitoBean
    JpaMetamodelMappingContext jpaMetamodelMappingContext;

    @MockitoBean
    ElideUserDetailsService userDetailsService;

    @MockitoBean
    JwtService jwtService;

    @MockitoBean
    SecurityProperties securityProperties;

    @Test
    @WithMockUser(roles = "STORE_USER")
    void allowsStoreUserDashboardAccess() throws Exception {
        mvc.perform(get("/api/v1/store/dashboard")).andExpect(status().isOk());
    }

    @Test
    @WithMockUser(roles = "CUSTOMER")
    void rejectsCustomerStoreDashboardAccess() throws Exception {
        mvc.perform(get("/api/v1/store/dashboard")).andExpect(status().isForbidden());
    }

    @Test
    void rejectsAnonymousStoreDashboardAccess() throws Exception {
        mvc.perform(get("/api/v1/store/dashboard")).andExpect(status().isForbidden());
    }
}
