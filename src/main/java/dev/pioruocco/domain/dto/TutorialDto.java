package dev.pioruocco.domain.dto;

public class TutorialDto {

    private Integer id;
    private String title;
    private String description;
    private Boolean published;

    public TutorialDto(Integer id, String title, String description, Boolean published) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.published = published;
    }

    public TutorialDto(String title, String description, Boolean published) {
        this.title = title;
        this.description = description;
        this.published = published;
    }


    public TutorialDto(){}


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getPublished() {
        return published;
    }

    public void setPublished(Boolean published) {
        this.published = published;
    }
}
