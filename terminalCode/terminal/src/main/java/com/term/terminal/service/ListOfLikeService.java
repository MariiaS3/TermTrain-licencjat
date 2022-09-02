package com.term.terminal.service;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.term.terminal.models.ListOfLike;

import com.term.terminal.repository.ListOfLikeRepository;


@Service
public class ListOfLikeService {
    @Autowired
    private ListOfLikeRepository listOfLikeRepository;

    public Optional<ListOfLike> findById(Integer id){
        return listOfLikeRepository.findById(id);
    }
    public ListOfLike findByIdCommentAndUser(Integer idComment, Integer idUser){
        return listOfLikeRepository.findByIdCommentAndUser(idComment, idUser);
    }
    public ListOfLike save(ListOfLike listOfLike){
        return listOfLikeRepository.save(listOfLike);
    }
}
