package com.term.terminal.service;

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
    public ListOfResults findByIdQuizAndUser(Integer idQuiz, Integer idUser){
        return listOfResultsRepository.findByIdQuizAndUser(idQuiz, idUser);
    }
    public ListOfResults save(ListOfResults listOfResults){
        return listOfResultsRepository.save(listOfResults);
    }
}
