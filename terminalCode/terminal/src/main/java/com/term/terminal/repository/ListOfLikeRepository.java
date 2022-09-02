package com.term.terminal.repository;

import com.term.terminal.models.ListOfLike;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ListOfLikeRepository extends JpaRepository<ListOfLike, Integer> {
    List<ListOfLike> findByUser(Integer postId);
    public ListOfLike findByIdCommentAndUser(Integer idComment, Integer idUser);
}
