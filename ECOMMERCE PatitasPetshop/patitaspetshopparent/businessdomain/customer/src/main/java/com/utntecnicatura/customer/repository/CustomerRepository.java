package com.utntecnicatura.customer.repository;


import com.utntecnicatura.customer.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    @Query("SELECT c FROM Customer c WHERE c.nombre = ?1")
    public Customer findByNombre(String nombre);
    @Query("SELECT c FROM Customer c WHERE c.apellido = ?1")
    public Customer findByApellido(String apellido);
    @Query("SELECT c FROM Customer c WHERE c.email = ?1")
    public Customer findByEmail(String email);

}
