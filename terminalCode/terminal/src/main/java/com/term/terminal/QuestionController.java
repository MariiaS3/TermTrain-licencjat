package com.term.terminal;

import java.util.List;

import com.term.terminal.models.Question;
import com.term.terminal.repository.QuestionRepository;
import com.term.terminal.repository.QuizRepository;

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
public class QuestionController {
    @Autowired 
    private QuizRepository quizRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @PostMapping("/quiz/{quizId}/question")
    public ResponseEntity<Question> creatQuestion(@PathVariable(value = "quizId") Integer quizId,
        @RequestBody Question questionRequest) {
      Question question = quizRepository.findById(quizId).map(quiz -> {
        questionRequest.setQuiz(quiz);
        return questionRepository.save(questionRequest);
      }).orElseThrow();
      return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @GetMapping("/quiz/{quizId}/question")
    public ResponseEntity<List<Question>> getAllQuestionByQuizId(@PathVariable(value = "quizId") Integer quizId){
        if (!quizRepository.existsById(quizId)) {
            // throw new ResourceNotFoundException("Not found Tutorial with id = " + quizId);
          }
          List<Question> questions = questionRepository.findByQuizId(quizId);//Aby wykonać kopię pliku, użyjesz:
          return new ResponseEntity<>(questions, HttpStatus.OK);
    }
    @DeleteMapping("/question/{id}")
    public void deleteQuestion(@PathVariable int id){
       Question question = questionRepository.findById(id).get();
       questionRepository.delete(question);
      //  return new ResponseEntity<String>("del", HttpStatus.OK);
    }    
}
