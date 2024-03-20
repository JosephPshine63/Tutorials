package dev.pioruocco.mapper;

public interface Mapper<Classe1, Classe2>{


    //questo metodo mapperà la seconda classe alla prima
    Classe2 mapEntityToDto(Classe1 classe1);

    //questo metodo mapperà la prima classe alla seconda
    Classe1 mapDtoToEntity(Classe2 classe2);

}
