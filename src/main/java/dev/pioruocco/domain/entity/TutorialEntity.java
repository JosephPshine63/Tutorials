package dev.pioruocco.domain.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.Serializable;

@Entity
@CrossOrigin
@Table(name = "tutorial")
public class TutorialEntity implements Serializable {

    @jakarta.persistence.Id
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @NotNull(message = "title cannot be empty")
    @NotEmpty
    @NotBlank
    private String title;
    @NotNull(message = "description cannot be empty")
    @NotEmpty
    @NotBlank
    private String description;
    private Boolean published;


    public TutorialEntity(Integer id, String title, String description, Boolean published) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.published = published;
    }

    public TutorialEntity(String title, String description, Boolean published) {
        this.title = title;
        this.description = description;
        this.published = published;
    }

    public TutorialEntity(){}

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
