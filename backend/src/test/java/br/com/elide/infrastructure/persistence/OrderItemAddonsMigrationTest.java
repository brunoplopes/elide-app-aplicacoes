package br.com.elide.infrastructure.persistence;

import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;

import static org.assertj.core.api.Assertions.assertThat;

class OrderItemAddonsMigrationTest {
    @Test
    void createsOrderItemAddonsTable() throws Exception {
        var migration = migration("db/migration/V9__add_order_item_addons.sql");

        assertThat(migration)
            .contains("create table order_item_addons")
            .contains("order_item_id uuid not null references order_items(id) on delete cascade")
            .contains("product_addon_id uuid not null references product_addons(id)")
            .contains("quantity integer not null check (quantity > 0)")
            .contains("unit_price numeric(12,2) not null check (unit_price >= 0)")
            .contains("total numeric(12,2) not null check (total >= 0)")
            .contains("create index idx_order_item_addons_item")
            .contains("create index idx_order_item_addons_addon");
    }

    private String migration(String resource) throws Exception {
        var url = OrderItemAddonsMigrationTest.class.getClassLoader().getResource(resource);
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
