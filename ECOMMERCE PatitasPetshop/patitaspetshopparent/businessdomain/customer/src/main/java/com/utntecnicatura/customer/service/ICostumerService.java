package com.utntecnicatura.customer.service;

import com.utntecnicatura.customer.entities.Customer;
import com.utntecnicatura.customer.exception.BusinessRuleException;
import org.springframework.http.ResponseEntity;
import java.net.UnknownHostException;
import java.util.List;
import java.util.Optional;


public interface ICostumerService {

    Optional<Customer> findById(long id);

    List<Customer> findAll();

    Customer get(long id);

    Customer getByNombre(String nombre) throws BusinessRuleException;

    Customer getByApellido(String apellido) throws BusinessRuleException;

    Customer getByEmail(String email) throws BusinessRuleException;

     Customer put(long id, Customer input) throws BusinessRuleException;

    Customer post(Customer input);

    void delete(Long id) throws BusinessRuleException;

}
