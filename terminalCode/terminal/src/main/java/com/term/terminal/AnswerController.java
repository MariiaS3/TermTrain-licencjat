package com.term.terminal;

import java.util.List;

import com.term.terminal.models.Answer;
import com.term.terminal.repository.AnswerRepository;
import com.term.terminal.repository.QuestionRepository;

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
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class AnswerController {
    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @PostMapping("/question/{questionId}/answer")
    public ResponseEntity<Answer> creatQuestion(@PathVariable(value = "questionId") Integer questionId,
        @RequestBody Answer answerRequest) {
      Answer answer = questionRepository.findById(questionId).map(q -> {
        answerRequest.setQuestion(q);
        return answerRepository.save(answerRequest);
      }).orElseThrow();
      return new ResponseEntity<>(answer, HttpStatus.CREATED);
    }

    @GetMapping("/question/{questionId}/answer")
    public ResponseEntity<List<Answer>> getAllAnswerByQuestionId(@PathVariable(value = "questionId") Integer questionId){
        if (!questionRepository.existsById(questionId)) {
            // throw new ResourceNotFoundException("Not found Tutorial with id = " + quizId);
          }
          List<Answer> answers = answerRepository.findByQuestionId(questionId);
          return new ResponseEntity<>(answers, HttpStatus.OK);
    }

    @DeleteMapping("/answer/{id}")
    public void deleteQuestion(@PathVariable int id){
       Answer answer = answerRepository.findById(id).get();
       answerRepository.delete(answer);
      //  return new ResponseEntity<String>("del", HttpStatus.OK);
    }    

}
