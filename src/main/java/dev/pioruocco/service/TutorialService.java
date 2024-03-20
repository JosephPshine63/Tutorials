package dev.pioruocco.service;

import dev.pioruocco.domain.entity.TutorialEntity;
import dev.pioruocco.exception.CustomException;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface TutorialService {

    TutorialEntity createOrSaveTutorial(TutorialEntity tutorialEntity);

    List<TutorialEntity> getAllTutorials() throws CustomException;

    Optional<TutorialEntity> findTutorialById(int id) throws CustomException;

    Map<String,Boolean> checkRemoveTutorial(int id);
}
