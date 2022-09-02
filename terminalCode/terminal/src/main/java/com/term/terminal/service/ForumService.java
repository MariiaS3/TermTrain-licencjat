package com.term.terminal.service;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.term.terminal.models.Forum;
import com.term.terminal.repository.ForumRepository;

@Service
public class ForumService {
    
    @Autowired 
    private ForumRepository forumRepository;

    public List<Forum> findAll() {
        return forumRepository.findAll();
    }

    public Optional<Forum> findById(Integer id) {
        return forumRepository.findById(id);
    }

    public Forum save(Forum forum) {
        return forumRepository.save(forum);
    }

    public void delete(Forum forum) {
        forumRepository.delete(forum);
    }
}
