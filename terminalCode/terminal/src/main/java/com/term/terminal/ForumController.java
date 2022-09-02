package com.term.terminal;

import java.util.List;

import com.term.terminal.models.Forum;

import com.term.terminal.service.ForumService;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ForumController {
    @Autowired 
    private ForumService forumService;
    
    @PostMapping( "/forum")
    public ResponseEntity<?> createForum(@RequestBody  Forum forum) {
            Forum savedForum = forumService.save(forum);
            return new ResponseEntity<>(savedForum, HttpStatus.CREATED);
    }

    @GetMapping("/forum")
    public ResponseEntity<?> getQuest() {
        List<Forum> forum = forumService.findAll();
    
        return new ResponseEntity<>(forum, HttpStatus.OK);
    }

    @PostMapping("/forum/{id}")
    public ResponseEntity<?> getForum(@PathVariable int id) {
        Forum forum = forumService.findById(id).get();
        return new ResponseEntity<>(forum, HttpStatus.OK);
    }

}
