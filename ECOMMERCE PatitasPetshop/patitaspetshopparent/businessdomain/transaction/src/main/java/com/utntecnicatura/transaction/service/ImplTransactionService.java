package com.utntecnicatura.transaction.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.utntecnicatura.transaction.entities.Producttransaction;
import com.utntecnicatura.transaction.entities.Transaction;
import com.utntecnicatura.transaction.exception.BusinessRuleException;
import com.utntecnicatura.transaction.mcsClients.MicroserviceClients;
import com.utntecnicatura.transaction.repository.TransactionRepository;
import com.utntecnicatura.transaction.utils.UtilsTransaction;
import io.netty.channel.ChannelOption;
import io.netty.channel.epoll.EpollChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.netty.http.client.HttpClient;
import org.springframework.http.HttpStatus;
import java.net.UnknownHostException;
import java.time.Duration;
import java.util.*;
import java.util.concurrent.TimeUnit;

@Service
public class ImplTransactionService implements ITransactionService {
    private static final Logger logger = LoggerFactory.getLogger(ImplTransactionService.class);

    @Autowired
    TransactionRepository transactionRepository;
    @Autowired
    UtilsTransaction utilsTransaction;
    @Autowired
    MicroserviceClients microserviceClients;

    @Override
    public Optional<Transaction> findById(Long id) {
        return transactionRepository.findById(id);
    }

    @Override
    public Transaction save(Transaction transaction) throws UnknownHostException, BusinessRuleException {
        utilsTransaction.validarCliente(transaction);
        utilsTransaction.validarProductos(transaction);
        if (transaction.getProducttransactions() != null) {
            for (Iterator<Producttransaction> it = transaction.getProducttransactions().iterator(); it.hasNext();) {
                Producttransaction dto = it.next();
                    dto.setTransaction(transaction);

            }
        }
        return transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }

    @Override
    public Transaction put(Transaction input) throws BusinessRuleException {
        Optional<Transaction> transaction = transactionRepository.findById(input.getId());
        if(transaction.isPresent()){
            if (utilsTransaction.validarMonto(input.getMonto())) {
                transaction.get().setDescripcion(input.getDescripcion());
                transaction.get().setReferencia(input.getReferencia());
                transaction.get().setMonto(input.getMonto());
                transaction.get().setEstado(utilsTransaction.validarDate(input.getFechaTransaccion()));
                transaction.get().setCanal(input.getCanal());
                transaction.get().setFechaTransaccion(input.getFechaTransaccion());
                Transaction save = transactionRepository.save(transaction.get());
                return ResponseEntity.ok(save).getBody();
            }else{
                throw new BusinessRuleException("1025",
                        "Error de validacion, El cliente n°:"+ input.getIdCliente() +" no existe", HttpStatus.PRECONDITION_FAILED);
            }
            }
        return input;
    }

    @Override
    public void delete(Transaction transaction) {

    }
}
