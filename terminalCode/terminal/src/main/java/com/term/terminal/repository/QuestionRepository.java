package com.term.terminal.repository;

import java.util.List;
import com.term.terminal.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;


public interface QuestionRepository extends JpaRepository<Question, Integer> {

    List<Question> findByQuizId(Integer postId);
    List<Question> findByText(String text);
}
