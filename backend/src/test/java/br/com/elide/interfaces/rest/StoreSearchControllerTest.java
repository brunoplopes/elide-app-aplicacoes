package br.com.elide.interfaces.rest;

import br.com.elide.application.StoreSearchService;
import br.com.elide.application.dto.MarketplaceDtos.StoreNearbyResponse;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import br.com.elide.infrastructure.security.ElideUserDetailsService;
import br.com.elide.infrastructure.security.JwtService;
import br.com.elide.infrastructure.security.SecurityProperties;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StoreSearchController.class)
@AutoConfigureMockMvc(addFilters = false)
class StoreSearchControllerTest {
    @Autowired
    MockMvc mvc;

    @MockitoBean
    StoreSearchService stores;

    @MockitoBean
    JwtService jwtService;

    @MockitoBean
    ElideUserDetailsService userDetailsService;

    @MockitoBean
    UserRepository users;

    @MockitoBean
    SecurityProperties securityProperties;

    @MockitoBean
    JpaMetamodelMappingContext jpaMetamodelMappingContext;

    @Test
    void nearbyReturnsStores() throws Exception {
        when(stores.nearby(new BigDecimal("-23.5505"), new BigDecimal("-46.6333"), 5000, 50, null))
            .thenReturn(List.of(new StoreNearbyResponse(UUID.randomUUID(), "ELIDE Food", "Restaurante", new BigDecimal("6.90"), new BigDecimal("20.00"), true, new BigDecimal("-23.5505000"), new BigDecimal("-46.6333000"), new BigDecimal("120.5"))));

        mvc.perform(get("/api/v1/stores/nearby")
                .param("latitude", "-23.5505")
                .param("longitude", "-46.6333")
                .param("radiusMeters", "5000"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].name").value("ELIDE Food"))
            .andExpect(jsonPath("$[0].distanceMeters").value(120.5));
    }

    @Test
    void rejectsLatitudeOutsideRange() throws Exception {
        mvc.perform(get("/api/v1/stores/nearby")
                .param("latitude", "-91")
                .param("longitude", "-46.6333")
                .param("radiusMeters", "5000"))
            .andExpect(status().isBadRequest());
    }

    @Test
    void rejectsLongitudeOutsideRange() throws Exception {
        mvc.perform(get("/api/v1/stores/nearby")
                .param("latitude", "-23.5505")
                .param("longitude", "-181")
                .param("radiusMeters", "5000"))
            .andExpect(status().isBadRequest());
    }

    @Test
    void rejectsInvalidRadiusAndLimit() throws Exception {
        mvc.perform(get("/api/v1/stores/nearby")
                .param("latitude", "-23.5505")
                .param("longitude", "-46.6333")
                .param("radiusMeters", "0")
                .param("limit", "101"))
            .andExpect(status().isBadRequest());
    }
}
