package com.term.terminal.models;

import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;


@Component
@Entity
@Table(name="Account")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="user_id",updatable = false )
    private Integer id;

    @Column(name = "username")
    private String username;


    @Column(name="email", unique = true)
    private String email;

    @Column(name = "password")
    private String pass;

    @Column(name = "is_admin")
    private boolean is_admin;

    @ElementCollection // 1
    @CollectionTable(name = "my_list") // 2
    @Column(name = "list") // 3
    private List<Integer> list;

    public Account(){
        
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public boolean isAdmin() {
        return is_admin;
    }

    public void setAdmin(boolean is_admin) {
        this.is_admin = is_admin;
    }

    
}
