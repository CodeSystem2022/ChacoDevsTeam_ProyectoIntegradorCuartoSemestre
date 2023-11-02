package com.utntecnicatura.transaction.service;

import com.utntecnicatura.transaction.entities.Transaction;
import com.utntecnicatura.transaction.exception.BusinessRuleException;
import org.springframework.http.ResponseEntity;

import java.net.UnknownHostException;
import java.util.List;
import java.util.Optional;

public interface ITransactionService {
    Transaction save(Transaction transaction) throws UnknownHostException, BusinessRuleException;
    List<Transaction> findAll();

    Optional<Transaction> findById(Long id);
    List<Transaction> findTransactionByIdCustomer(Long id) throws BusinessRuleException;

    Transaction put(Transaction input) throws BusinessRuleException;

    void delete (Transaction transaction);
}
