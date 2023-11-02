package com.utntecnicatura.transaction.repository;

import com.utntecnicatura.transaction.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TransactionRepository extends JpaRepository<Transaction,Long> {
    @Query("SELECT t FROM Transaction t WHERE t.idCliente = ?1")
    public List<Transaction> findTransactionByIdCustomer(Long idCliente);
}
