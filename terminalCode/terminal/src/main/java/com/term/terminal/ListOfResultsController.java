package com.term.terminal;

import java.util.List;

import com.term.terminal.models.ListOfResults;
import com.term.terminal.repository.ListOfResultsRepository;
import com.term.terminal.service.ListOfResultsService;

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
public class ListOfResultsController {
    
    @Autowired
    private ListOfResultsService listOfResultsService;

    @Autowired
    private ListOfResultsRepository listOfResultsRepository;

    @PostMapping("/user/add-results/{accountId}")
    public ResponseEntity<?>  addResult(@RequestBody ListOfResults newlistOfResults){
        ListOfResults listOfResults = listOfResultsService.save(newlistOfResults);
        return new ResponseEntity<>(listOfResults, HttpStatus.CREATED);
    }

    @PostMapping("/user/get-results/{accountId}")
    public ResponseEntity<?> getResults(@PathVariable(value = "accountId") Integer accountId){
        List<ListOfResults> listOfResults = listOfResultsRepository.findByAccountId(accountId);
            return  new ResponseEntity<>(listOfResults, HttpStatus.OK);
    }

}
