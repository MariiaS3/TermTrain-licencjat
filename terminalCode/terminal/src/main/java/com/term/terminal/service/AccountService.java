package com.term.terminal.service;

import java.util.List;

import com.term.terminal.models.Account;
import com.term.terminal.repository.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public List<Account> findAll() {
        return accountRepository.findAll();
    }

    public Account findByEmail(String email) {
        return accountRepository.findByEmail(email);
    }

    public Account save(Account user) {
        return accountRepository.save(user);
    }

    public void delete(Account user) {
        accountRepository.delete(user);
    }
}
