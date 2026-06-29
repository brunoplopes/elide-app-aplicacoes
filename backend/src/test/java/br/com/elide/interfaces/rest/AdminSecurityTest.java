package br.com.elide.interfaces.rest;

import br.com.elide.application.AdminDashboardService;
import br.com.elide.application.AdminManagementService;
import br.com.elide.application.dto.MarketplaceDtos.DashboardResponse;
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

import java.math.BigDecimal;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(AdminController.class)
@Import({SecurityConfig.class, RateLimitFilter.class, JwtAuthenticationFilter.class, MustChangePasswordFilter.class})
class AdminSecurityTest {
    @Autowired
    MockMvc mvc;

    @MockitoBean
    AdminDashboardService dashboardService;

    @MockitoBean
    AdminManagementService adminManagementService;

    @MockitoBean
    JpaMetamodelMappingContext jpaMetamodelMappingContext;

    @MockitoBean
    UserRepository users;

    @MockitoBean
    StoreRepository stores;

    @MockitoBean
    ElideUserDetailsService userDetailsService;

    @MockitoBean
    JwtService jwtService;

    @MockitoBean
    SecurityProperties securityProperties;

    @Test
    void rejectsAnonymousAdminDashboardAccess() throws Exception {
        mvc.perform(get("/api/v1/admin/dashboard")).andExpect(status().isForbidden());
    }

    @Test
    @WithMockUser(roles = "MASTER_ADMIN")
    void allowsMasterAdminDashboardAccess() throws Exception {
        when(dashboardService.dashboard()).thenReturn(new DashboardResponse(BigDecimal.ZERO, 0, 0, 0, 0, List.of()));
        mvc.perform(get("/api/v1/admin/dashboard")).andExpect(status().isOk());
    }
}
