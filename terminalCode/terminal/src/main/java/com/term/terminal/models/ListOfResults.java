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
@Table(name="listOfResults")
public class ListOfResults {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="list_id",updatable=false)
    private Integer id;

    @Column(name="id_quiz")
    private Integer idQuiz;

    @Column(name="data")
    private String data;

    @Column(name="result")
    private String result;

    @Column(name = "user_id", nullable = false)
	private Integer user;


    public Integer getUser() {
        return user;
    }

    public void setUser(Integer account_id) {
        this.user = account_id;
    }

    public ListOfResults() {
    }

  
    public String getData() {
        return data;
    }
  

    public Integer getIdQuiz() {
        return idQuiz;
    }

    public void setIdQuiz(Integer idQuiz) {
        this.idQuiz = idQuiz;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Integer getId() {
        return id;
    }

    
}
