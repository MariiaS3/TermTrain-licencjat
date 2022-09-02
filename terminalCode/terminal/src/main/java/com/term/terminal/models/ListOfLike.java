package com.term.terminal.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="listOfLike")
public class ListOfLike {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="list_id",updatable=false)
    private Integer id;


    @Column(name="id_comment")
    private Integer idComment;

    @Column(name = "user_id", nullable = false)
	private Integer user;

 
    @Column(name = "likes") 
    private Boolean likes;


    @Column(name = "dislikes") 
    private Boolean dislikes;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdComment() {
        return idComment;
    }

    public void setIdComment(Integer idComment) {
        this.idComment = idComment;
    }

    public Integer getUser() {
        return user;
    }

    public void setUser(Integer user) {
        this.user = user;
    }

    public Boolean getLikes() {
        return likes;
    }

    public void setLikes(Boolean likes) {
        this.likes = likes;
    }

    public Boolean getDislikes() {
        return dislikes;
    }

    public void setDislikes(Boolean dislikes) {
        this.dislikes = dislikes;
    }

    
}
