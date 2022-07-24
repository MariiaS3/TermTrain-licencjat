package com.term.terminal.repository;

import com.term.terminal.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AccountRepository extends JpaRepository<Account, Integer> {
    Account findByEmail(String email);
}

