package com.term.terminal.repository;



import com.term.terminal.models.Quiz;

import org.springframework.data.jpa.repository.JpaRepository;


public interface QuizRepository extends JpaRepository<Quiz, Integer> {
}
