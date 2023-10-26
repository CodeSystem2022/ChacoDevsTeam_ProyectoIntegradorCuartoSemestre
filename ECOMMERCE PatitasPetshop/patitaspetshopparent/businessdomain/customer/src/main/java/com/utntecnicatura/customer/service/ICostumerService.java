package com.utntecnicatura.customer.service;

import com.utntecnicatura.customer.entities.Customer;
import com.utntecnicatura.customer.exception.BusinessRuleException;
import java.util.List;
import java.util.Optional;


public interface ICostumerService {

    Optional<Customer> findById(long id);

    List<Customer> findAll();

    Customer get(long id)  throws BusinessRuleException;

    Customer getByNombre(String nombre) throws BusinessRuleException;

    Customer getByApellido(String apellido) throws BusinessRuleException;

    Customer getByEmail(String email) throws BusinessRuleException;

    Customer put(long id, Customer input) throws BusinessRuleException;

    Customer post(Customer input);

    Optional<Customer> validarCredenciales(String correo, String nombre, String contraseña) throws BusinessRuleException;

    void delete(Long id) throws BusinessRuleException;

}
