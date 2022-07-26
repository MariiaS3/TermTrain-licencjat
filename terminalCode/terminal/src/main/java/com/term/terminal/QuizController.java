package com.term.terminal;

import java.util.List;

import com.term.terminal.models.Quiz;
import com.term.terminal.service.QuizService;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class QuizController {
    @Autowired 
    private QuizService quizService;
    
    @PostMapping( "/quiz")
    public ResponseEntity<?> createQuiz(@RequestBody  Quiz quiz) {
            Quiz savedQuiz = quizService.save(quiz);
            return new ResponseEntity<>(savedQuiz, HttpStatus.CREATED);
    }

    @GetMapping("/quiz")
    public ResponseEntity<?> getQuizzes() {
        List<Quiz> quiz = quizService.findAll();
    
        return new ResponseEntity<>(quiz, HttpStatus.OK);
    }

    @DeleteMapping("/quiz/{id}")
    public void deleteQuiz(@PathVariable int id){
       Quiz quiz = quizService.findById(id).get();
       quizService.delete(quiz);
    //    return new ResponseEntity<String>("del", HttpStatus.OK);
    }    
}
