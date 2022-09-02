package com.term.terminal;

import java.util.List;

import com.term.terminal.models.Comment;
import com.term.terminal.repository.CommentRepository;
import com.term.terminal.repository.ForumRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CommentsController {
    @Autowired 
    private ForumRepository forumRepository;

    @Autowired
    private CommentRepository commentRepository;

    @PostMapping("/forum/{forumId}/comment")
    public ResponseEntity<Comment> creatComment(@PathVariable(value = "forumId") Integer forumId,
        @RequestBody Comment commentRequest) {
      Comment comment = forumRepository.findById(forumId).map(forum -> {
        commentRequest.setForum(forum);
        return commentRepository.save(commentRequest);
      }).orElseThrow();
      return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

    @GetMapping("/forum/{forumId}/comment")
    public ResponseEntity<List<Comment>> getAllCommentsByForumId(@PathVariable(value = "forumId") Integer forumId){
        if (!forumRepository.existsById(forumId)) {
            // throw new ResourceNotFoundException("Not found  with id = " + quizId);
          }
          List<Comment> comments = commentRepository.findByForumId(forumId);
          return new ResponseEntity<>(comments, HttpStatus.OK);
    }

}
