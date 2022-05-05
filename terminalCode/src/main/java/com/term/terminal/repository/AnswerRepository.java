package com.term.terminal.repository;

import java.util.List;

import com.term.terminal.models.Answer;

import org.springframework.data.jpa.repository.JpaRepository;


public interface AnswerRepository extends JpaRepository<Answer, Integer> {
    
    List<Answer> findByQuestionId(Integer postId);
}
