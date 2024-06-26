package dev.pioruocco.repository;

import dev.pioruocco.domain.entity.TutorialEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TutorialRepository extends JpaRepository<TutorialEntity, Integer> {
}
