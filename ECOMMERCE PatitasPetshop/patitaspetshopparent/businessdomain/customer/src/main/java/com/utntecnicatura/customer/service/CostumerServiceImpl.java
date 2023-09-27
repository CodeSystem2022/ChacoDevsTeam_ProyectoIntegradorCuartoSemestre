package com.utntecnicatura.customer.service;

import com.utntecnicatura.customer.entities.Customer;
import com.utntecnicatura.customer.exception.BusinessRuleException;
import com.utntecnicatura.customer.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.net.UnknownHostException;
import java.util.List;
import java.util.Optional;
@Service
public class CostumerServiceImpl implements ICostumerService {
    @Autowired//para no instanciar, lo realiza automaticamente el framework
    CustomerRepository customerRepository;

    @Override
    public Optional<Customer> findById(long id) {
        return customerRepository.findById(id);
    }

    @Override
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer get(long id) {
        return customerRepository.findById(id).get();
    }

    @Override
    public Customer getByNombre(String nombre) throws BusinessRuleException {
        Customer customer=customerRepository.findByNombre(nombre);
        if(customer!=null) {
            return customer;
        }else{
            throw new BusinessRuleException("1025",
                    "Error de validacion, El cliente : "+nombre+" no existe", HttpStatus.PRECONDITION_FAILED);
        }
    }

    @Override
    public Customer getByApellido(String apellido) throws BusinessRuleException {
        Customer customer=customerRepository.findByApellido(apellido);
        if(customer!=null) {
            return customer;
        }else{
            throw new BusinessRuleException("1025",
                    "Error de validacion, El cliente : "+apellido+" no existe", HttpStatus.PRECONDITION_FAILED);
        }
    }

    @Override
    public Customer getByEmail(String email) throws BusinessRuleException {
        Customer customer=customerRepository.findByEmail(email);
        if(customer!=null) {
            return customer;
        }else{
            throw new BusinessRuleException("1025",
                    "Error de validacion, El mail ingresado : "+email+" no existe", HttpStatus.PRECONDITION_FAILED);
        }
    }

    @Override
    public Customer put(long id, Customer input) throws BusinessRuleException {
        Optional<Customer> customer = customerRepository.findById(id);
        if(customer.isPresent()){
            Customer find = customer.get();
            find.setNombre(input.getNombre()!=null?input.getNombre(): find.getNombre());
            find.setCelular(input.getCelular()!=null?input.getCelular(): find.getCelular());
            find.setApellido(input.getApellido()!=null?input.getApellido(): find.getApellido());
            return customerRepository.save(find);
        }else{
            throw new BusinessRuleException("1025",
                    "Error de validacion, El cliente n°:"+ id+" no existe", HttpStatus.PRECONDITION_FAILED);
        }
    }

    @Override
    public Customer post(Customer input){
        return customerRepository.save(input);
    }

    @Override
    public void delete(Long id) throws BusinessRuleException {
        Optional<Customer> customer=customerRepository.findById(id);
        if(customer.isPresent()) {
            customerRepository.deleteById(customer.get().getId());
        }else{
            throw new BusinessRuleException("1025",
                    "Error de validacion, El cliente n°: "+id+" existe", HttpStatus.PRECONDITION_FAILED);

        }
    }
}
