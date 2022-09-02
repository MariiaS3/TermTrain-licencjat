package com.term.terminal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.term.terminal.models.Forum;


public interface ForumRepository extends JpaRepository<Forum, Integer> {

}
