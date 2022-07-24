package com.term.terminal.service;


import java.util.List;
import java.util.Optional;

import com.term.terminal.models.Quiz;
import com.term.terminal.repository.QuizRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuizService {
    @Autowired private QuizRepository quizRepository;

    public List<Quiz> findAll() {
        return quizRepository.findAll();
    }

    
    public Optional<Quiz> findById(Integer id) {
        return quizRepository.findById(id);
    }


    public Quiz save(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public void delete(Quiz quiz) {
        quizRepository.delete(quiz);
    }

}
