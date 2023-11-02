package com.utntecnicatura.transaction.controller;


import com.utntecnicatura.transaction.entities.Transaction;
import com.utntecnicatura.transaction.exception.BusinessRuleException;
import com.utntecnicatura.transaction.service.ITransactionService;
import com.utntecnicatura.transaction.utils.UtilsTransaction;
import com.utntecnicatura.transaction.repository.TransactionRepository;
import com.utntecnicatura.transaction.service.ImplTransactionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.UnknownHostException;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/transaction")
public class TransactionRestController {
    @Autowired
    UtilsTransaction utilsTransaction;
    @Autowired
    ITransactionService iTransactionService;

    private static final Logger logger = LoggerFactory.getLogger(ImplTransactionService.class);



    @GetMapping("/listarTransacciones")
    public ResponseEntity<List<Transaction>> findAll(){
        List<Transaction> findAll = iTransactionService.findAll();
        if(findAll==null||findAll.isEmpty()) {
            logger.info("No se obtuvieron resultados");
            return ResponseEntity.noContent().build();
        }else{
            logger.info("Se obtuvieron las siguientes transacciones: ");
            findAll.stream().forEach(elemento -> logger.info("ID: " + elemento.getId()));
            return ResponseEntity.ok(findAll);
        }
    }
    @GetMapping("/transacciones/{id}")
    public ResponseEntity<Transaction> get(@PathVariable long id){
        logger.info("Se consulto la transaccion N°"+id);
        return iTransactionService.findById(id).map(x->ResponseEntity.ok(x))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/transaccionesCliente/{id}")
    public ResponseEntity<List<Transaction>> getTransactionCustomer(@PathVariable long id) throws BusinessRuleException {
        logger.info("Se consulto las transacciones del cliente N° " + id);
        List<Transaction> findTransacciones = iTransactionService.findTransactionByIdCustomer(id);
        if(findTransacciones==null||findTransacciones.isEmpty()) {
            logger.info("No se obtuvieron resultados");
            return ResponseEntity.noContent().build();
        }else{
            logger.info("Se obtuvieron las siguientes transacciones: ");
            findTransacciones.stream().forEach(elemento -> logger.info("ID: " + elemento.getId()));
            return ResponseEntity.ok(findTransacciones);
        }
    }

    @PutMapping("/modificarTransaccion/{id}")
    public ResponseEntity<?> put(@RequestBody Transaction input) throws BusinessRuleException, UnknownHostException {
        Transaction save = iTransactionService.put(input);
        logger.info("Se modifico la transaccion N°"+input.getId());
        return  new ResponseEntity<>(save,HttpStatus.CREATED);
    }
    @PostMapping("/nuevaTransaccion")
    public ResponseEntity<?> post(@RequestBody Transaction input) throws UnknownHostException, BusinessRuleException {
        Transaction save = iTransactionService.save(input);
        logger.info("Se creo la transaccion N°"+input.getId());
            return new ResponseEntity<>(save, HttpStatus.CREATED);

    }

    @DeleteMapping("/borrarTransaccion/{id}")
    public ResponseEntity<?> delete(@PathVariable long id){
        Optional<Transaction> findById=iTransactionService.findById(id);
        if(findById.get() != null) {
            iTransactionService.delete(findById.get());
            logger.info("Se elimino la transaccion N°"+id);
            return ResponseEntity.ok().build();
        }else{
            logger.info("Ocurrio un error al eliminar la transaccion N°"+id);
            return ResponseEntity.notFound().build();
        }
    }
}

