package dev.pioruocco.service;

import dev.pioruocco.domain.entity.TutorialEntity;
import dev.pioruocco.exception.CustomException;
import dev.pioruocco.repository.TutorialRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/*
Controllo Inserimento e Aggiornamento di un Tutorial
Controllo recupero di tutti i Tutorial
Controllo recupero di un Tutorial per chiave primaria
Controllo eliminazione di un Tutorial per chiave primaria
 */
@Service
@Transactional
public class TutorialServiceImpl implements TutorialService{

    private final TutorialRepository tutorialRepository;

    public TutorialServiceImpl(TutorialRepository tutorialRepository) {
        this.tutorialRepository = tutorialRepository;
    }

    //insert and update of a tutorial
    @Override
    public TutorialEntity createOrSaveTutorial(TutorialEntity tutorialEntity){
        TutorialEntity savedOrUpdated = null;

        try {
            savedOrUpdated = tutorialRepository.save(tutorialEntity);
        }catch (Exception ex){
            ex.printStackTrace();
        }

        return savedOrUpdated;
    }

    //list of all tutorials
    @Override
    public List<TutorialEntity> getAllTutorials() throws CustomException {
        List<TutorialEntity> tutorialEntities = tutorialRepository.findAll();

        if(tutorialEntities.isEmpty())
            throw new CustomException("no tutorials retrieved...");

        return StreamSupport.stream(
                tutorialRepository.findAll().spliterator(), false
        ).collect(Collectors.toList());
    }

    //finding one tutorial by id
    @Override
    public Optional<TutorialEntity> findTutorialById(int id) throws CustomException {
        return Optional.ofNullable(tutorialRepository.findById(id).orElseThrow(() ->
                new CustomException("cannot find tutorial by id...")
        ));
    }


    //delete of a tutorial by primary key

    @Override
    public Map<String, Boolean> checkRemoveTutorial(int id) {
        Map<String,Boolean> removeMap = new HashMap<>();

        try {

            tutorialRepository.deleteById(id);
            removeMap.put("DELETING",true);
        }

        catch(IllegalArgumentException ex){

            removeMap.put("DELETING",false);
            ex.printStackTrace();
        }

        return removeMap;
    }
}
