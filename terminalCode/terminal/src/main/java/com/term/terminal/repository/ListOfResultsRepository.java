package com.term.terminal.repository;

import com.term.terminal.models.ListOfResults;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

 
public interface ListOfResultsRepository extends JpaRepository<ListOfResults, Integer> {
    List<ListOfResults> findByAccountId(Integer postId);
}

