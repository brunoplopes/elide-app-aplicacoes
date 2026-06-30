package br.com.elide.infrastructure.persistence;

import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;

import static org.assertj.core.api.Assertions.assertThat;

class StoreGeolocationMigrationTest {
    @Test
    void createsPostgisExtensionAndStoreGeolocationSchema() throws Exception {
        var postgis = migration("db/migration/V7__enable_postgis.sql");
        var geolocation = migration("db/migration/V8__add_store_geolocation.sql");

        assertThat(postgis).contains("create extension if not exists postgis");
        assertThat(geolocation)
            .contains("add column latitude numeric(10,7)")
            .contains("add column longitude numeric(10,7)")
            .contains("add column location geography(point, 4326)")
            .contains("check (latitude between -90 and 90)")
            .contains("check (longitude between -180 and 180)")
            .contains("create or replace function update_store_location()")
            .contains("create trigger trg_stores_location")
            .contains("update stores")
            .contains("create index idx_stores_location_gist on stores using gist(location)")
            .contains("create index idx_stores_status_open_live on stores(status, open) where deleted_at is null")
            .contains("create index idx_store_categories_category_store on store_categories(category_id, store_id)");
    }

    private String migration(String resource) throws Exception {
        var url = StoreGeolocationMigrationTest.class.getClassLoader().getResource(resource);
        if (url != null) {
            return Files.readString(Path.of(url.toURI())).toLowerCase();
        }
        var current = Path.of("").toAbsolutePath();
        for (var i = 0; i < 8 && current != null; i++) {
            var backendRelative = current.resolve("src/main/resources").resolve(resource);
            if (Files.exists(backendRelative)) {
                return Files.readString(backendRelative).toLowerCase();
            }
            var workspaceRelative = current.resolve("backend/src/main/resources").resolve(resource);
            if (Files.exists(workspaceRelative)) {
                return Files.readString(workspaceRelative).toLowerCase();
            }
            current = current.getParent();
        }
        throw new IllegalStateException("Migration not found: " + resource);
    }
}
