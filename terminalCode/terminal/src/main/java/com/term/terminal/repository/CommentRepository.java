package com.term.terminal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.term.terminal.models.Comment;


public interface CommentRepository  extends JpaRepository<Comment, Integer> {

    List<Comment> findByForumId(Integer postId);


}

