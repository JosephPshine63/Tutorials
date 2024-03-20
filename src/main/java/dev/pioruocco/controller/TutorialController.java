package dev.pioruocco.controller;

import dev.pioruocco.domain.dto.TutorialDto;
import dev.pioruocco.domain.entity.TutorialEntity;
import dev.pioruocco.exception.CustomException;
import dev.pioruocco.mapper.Mapper;
import dev.pioruocco.service.TutorialService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/*
all endpoints

http://localhost:8080/tutorials/post
http://localhost:8080/tutorials/put
http://localhost:8080/tutorials/get/{id}s
http://localhost:8080/tutorials/get/all
http://localhost:8080/tutorials/delete/{id}
 */
@RestController
@CrossOrigin
@RequestMapping("/tutorials")
public class TutorialController {

    private final TutorialService tutorialService;
    private final Mapper<TutorialEntity,TutorialDto> mapper;

    public TutorialController(TutorialService tutorialService, Mapper<TutorialEntity, TutorialDto> mapper) {
        this.tutorialService = tutorialService;
        this.mapper = mapper;
    }

    //post method Dto to Entity
    @PostMapping("/post")
    public ResponseEntity<TutorialDto> createTutorial(@Valid @RequestBody TutorialDto tutorialDto){
        TutorialEntity createdTutorialEnt = mapper.mapDtoToEntity(tutorialDto);
        tutorialService.createOrSaveTutorial(createdTutorialEnt);

        return new ResponseEntity<>(mapper.mapEntityToDto(createdTutorialEnt), HttpStatus.OK);
    }

    //put
    @PutMapping("/put")
    public ResponseEntity<TutorialDto> updateTutorial(@Valid @RequestBody TutorialDto tutorialDto){
        TutorialEntity createdTutorial = mapper.mapDtoToEntity(tutorialDto);
        tutorialService.createOrSaveTutorial(createdTutorial);

        return new ResponseEntity<>(mapper.mapEntityToDto(createdTutorial), HttpStatus.OK);
    }

    //get all tutorials from the database
    @GetMapping("/get/all")
    public List<TutorialDto> getAllTutorials() throws CustomException {
        List<TutorialEntity> tutorialEntities = tutorialService.getAllTutorials();

        return tutorialEntities.stream()
                .map((mapper::mapEntityToDto)).collect(Collectors.toList());
    }

    //get a single tutorial by id
    @GetMapping("/get/{id}")
    public ResponseEntity<TutorialDto> getTutorialById(@PathVariable int id) throws CustomException {
        Optional<TutorialEntity> foundEntity = tutorialService.findTutorialById(id);

        return foundEntity.map(entity -> {
            TutorialDto authorDto = mapper.mapEntityToDto(entity);
            return new ResponseEntity<>(authorDto, HttpStatus.OK);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    //delete of a tutorial
    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> removeTutorial(@PathVariable int id){
        return tutorialService.checkRemoveTutorial(id);
    }
}
