package com.term.terminal;

import java.util.List;

import com.term.terminal.models.Account;
import com.term.terminal.models.Comment;
import com.term.terminal.models.Forum;
import com.term.terminal.models.ListOfLike;
import com.term.terminal.repository.AccountRepository;
import com.term.terminal.repository.CommentRepository;
import com.term.terminal.repository.ForumRepository;
import com.term.terminal.service.AccountService;
import com.term.terminal.service.ListOfLikeService;

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

    @Autowired
    private ListOfLikeService listOfLikeService;

    @PostMapping("/forum/{forumId}/comment")
    public ResponseEntity<Comment> creatComment(@PathVariable(value = "forumId") Integer forumId,
        @RequestBody Comment commentRequest) {
        Forum forum = forumRepository.findById(forumId).get();
        commentRequest.setForum(forum);
        Comment comment = commentRepository.save(commentRequest);
        ListOfLike listOfLike = new ListOfLike();
        listOfLike.setLikes(false);
        listOfLike.setDislikes(false);
        listOfLike.setUser(commentRequest.getIdUser());
        listOfLike.setIdComment(comment.getId());
        listOfLikeService.save(listOfLike);
        return  new ResponseEntity<>(comment, HttpStatus.CREATED);
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
