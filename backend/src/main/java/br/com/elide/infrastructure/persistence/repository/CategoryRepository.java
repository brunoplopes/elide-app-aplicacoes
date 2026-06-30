package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CategoryRepository extends JpaRepository<CategoryEntity, UUID> {
    List<CategoryEntity> findByActiveTrueOrderByNameAsc();

    List<CategoryEntity> findTop20ByActiveTrueAndNameContainingIgnoreCaseOrderByNameAsc(String name);
}
