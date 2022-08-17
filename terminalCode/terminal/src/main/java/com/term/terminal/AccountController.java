package com.term.terminal;

import com.term.terminal.models.Account;
import com.term.terminal.service.AccountService;

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
public class AccountController {
    @Autowired 
    private AccountService userService;
    
    // @GetMapping("/user")
    // public ResponseEntity<Account> getUser( String email) {
    //     Account user = userService.findByEmail(email);
    //     return new ResponseEntity<>(user, HttpStatus.OK);
    // }

    @PostMapping("/user/login")
    public ResponseEntity<String> getUser( @RequestBody Account newUser) {
        Account user = userService.findByEmail(newUser.getEmail());
        if (user!= null && newUser.getPass().equals(user.getPass())){
        
            return new ResponseEntity<String>(user.getId() + ":"+ user.getEmail()+" "+user.getUsername(), HttpStatus.OK);
        }else  if(user!= null && newUser.getPass().equals(user.getPass()) == false){
            return new ResponseEntity<String>("password", HttpStatus.OK);
        }else{
            return new ResponseEntity<String>("dane", HttpStatus.OK);
        }
    }
    
    @PostMapping("/user/admin/{accountId}")
    public ResponseEntity<String> getAdmin( @PathVariable(value = "accountId") Integer accountId) {
        Account user = userService.findById(accountId);
        return new ResponseEntity<String>(user.isAdmin()+"", HttpStatus.OK);
    }

    @PostMapping(  "/user")
    public ResponseEntity<?> create( @RequestBody Account newUser){
        Account user = userService.save(newUser);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
}
