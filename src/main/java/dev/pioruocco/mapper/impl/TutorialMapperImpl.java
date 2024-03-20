package dev.pioruocco.mapper.impl;

import dev.pioruocco.domain.dto.TutorialDto;
import dev.pioruocco.domain.entity.TutorialEntity;
import dev.pioruocco.mapper.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class TutorialMapperImpl implements Mapper<TutorialEntity, TutorialDto> {

    private final ModelMapper modelMapper;

    public TutorialMapperImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Override
    public TutorialDto mapEntityToDto(TutorialEntity tutorialEntity) {
        return modelMapper.map(tutorialEntity, TutorialDto.class);
    }

    @Override
    public TutorialEntity mapDtoToEntity(TutorialDto tutorialDto) {
        return modelMapper.map(tutorialDto, TutorialEntity.class);
    }
}
