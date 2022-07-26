package com.term.terminal.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Component
@Entity
@Table(name="listOfResults")
public class ListOfResults {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="list_id",updatable=false)
    private Integer id;

    @Column(name="name_quiz")
    private String nameQuiz;

    @Column(name="data")
    private String data;

    @Column(name="result")
    private Integer result;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "account_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
	private Account account;


    public ListOfResults() {
    }

    public String getId_quiz() {
        return nameQuiz;
    }

    public void setId_quiz(String id_quiz) {
        this.nameQuiz = id_quiz;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Integer getResult() {
        return result;
    }

    public void setResult(Integer result) {
        this.result = result;
    }

    
}
