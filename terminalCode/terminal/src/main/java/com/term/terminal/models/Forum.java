package com.term.terminal.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;


import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="Forum")
public class Forum {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="forum_id", updatable = false)
    private int id;

    @Size(min = 10, max=300, message = "The question should be between 10 and 300 characters" )
    @Column(name="name",columnDefinition="TEXT")
    private String name;

    @Size(min = 10, max=10000, message = "The question should be between 10 and 10000 characters" )
    @Column(name="describe", columnDefinition="TEXT")
    private String describe;

    @Column(name = "id_user")
    private Integer idUser;

    public int getId() {
        return id;
    }

  public Integer getIdUser() {
    return idUser;
}

public void setIdUser(Integer idUser) {
    this.idUser = idUser;
}

  public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe;
    }

}
