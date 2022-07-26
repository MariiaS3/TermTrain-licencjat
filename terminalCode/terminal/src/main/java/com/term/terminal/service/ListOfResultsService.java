package com.term.terminal.service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.term.terminal.models.ListOfResults;
import com.term.terminal.repository.ListOfResultsRepository;


@Service
public class ListOfResultsService {
    @Autowired
    private ListOfResultsRepository listOfResultsRepository;

    public Optional<ListOfResults> findById(Integer id){
        return listOfResultsRepository.findById(id);
    }

    public ListOfResults save(ListOfResults listOfResults){
        return listOfResultsRepository.save(listOfResults);
    }
}
