package com.term.terminal;

import java.util.List;

import com.term.terminal.models.Comment;
import com.term.terminal.models.ListOfLike;
import com.term.terminal.repository.CommentRepository;
import com.term.terminal.repository.ListOfLikeRepository;
import com.term.terminal.service.ListOfLikeService;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ListOfLikeController {
    @Autowired
    private ListOfLikeService listOfLikeService;

    @Autowired
    private ListOfLikeRepository listOfLikeRepository;

    @Autowired
    private CommentRepository commentRepository;

    @PostMapping("/user/add-like")
    public ResponseEntity<?> addLike(@RequestBody ListOfLike newlistOfLike) {
        ListOfLike listfindByIdComment = listOfLikeService.findByIdCommentAndUser(newlistOfLike.getIdComment(),newlistOfLike.getUser());

        if (listfindByIdComment != null) {
            Comment com = commentRepository.findById(newlistOfLike.getIdComment()).get();
            if(listfindByIdComment.getLikes() != newlistOfLike.getLikes()){
                if(newlistOfLike.getLikes() == true){
                    com.setLike(com.getLike()+1);
                    if(com.getDisLike()>0){
                        com.setDisLike(com.getDisLike()-1);
                    }
                }else{
                    if(com.getLike()>0){
                        com.setLike(com.getLike()-1);
                    }
                    com.setDisLike(com.getDisLike()+1);
                }
            }
        
            Comment saveCom = commentRepository.save(com);

            listfindByIdComment.setDislikes(newlistOfLike.getDislikes());
            listfindByIdComment.setLikes(newlistOfLike.getLikes());
            ListOfLike listOfResults = listOfLikeService.save(listfindByIdComment);
            return new ResponseEntity<>(listOfResults, HttpStatus.OK);
        } else {
            listfindByIdComment = listOfLikeService.save(newlistOfLike);
            Comment com = commentRepository.findById(newlistOfLike.getIdComment()).get();
        
            // if(newlistOfLike.getLikes()==true){
            //     com.setLike(com.getLike()+1);
            // }else{
            //     com.setDisLike(com.getDisLike()+1);
            // }
            Comment saveCom = commentRepository.save(com);
            return new ResponseEntity<>(listfindByIdComment, HttpStatus.CREATED);
        }
    }

    @PostMapping("/user/get-like/{accountId}")
    public ResponseEntity<?> getLikes(@PathVariable(value = "accountId") Integer accountId) {
        List<ListOfLike> listOfLikes = listOfLikeRepository.findByUser(accountId);
        return new ResponseEntity<>(listOfLikes, HttpStatus.OK);
    }

}
