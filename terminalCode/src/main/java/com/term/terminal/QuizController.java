package com.term.terminal;

import java.util.List;

import com.term.terminal.models.Quiz;

import com.term.terminal.service.QuizService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class QuizController {
    @Autowired private QuizService quizService;
    

    // @PostMapping
    // public ResponseEntity<?> createQuiz(@RequestBody @Valid Quiz quiz, BindingResult bindingResult) {
    //     if (bindingResult.hasErrors()) {
    //         Map<String, String> errorsMap = ControllerUtils.getErrors(bindingResult);

    //         return new ResponseEntity<>(errorsMap, HttpStatus.BAD_REQUEST);
    //     } else {
    //         Quiz savedQuiz = quizService.save(quiz);

    //         return new ResponseEntity<>(savedQuiz, HttpStatus.CREATED);
    //     }
    // }

    @GetMapping("/quiz")
    public ResponseEntity<?> getQuizzes() {
        List<Quiz> quiz = quizService.findAll();

        return new ResponseEntity<>(quiz, HttpStatus.OK);
    }

}
