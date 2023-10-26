package com.utntecnicatura.customer.controller;

import com.utntecnicatura.customer.entities.Credencial;
import com.utntecnicatura.customer.entities.Customer;
import com.utntecnicatura.customer.exception.BusinessRuleException;
import com.utntecnicatura.customer.repository.CustomerRepository;

import com.utntecnicatura.customer.service.CostumerServiceImpl;
import com.utntecnicatura.customer.service.ICostumerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;


import java.net.UnknownHostException;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/customer")
public class CustomerRestController {
    @Autowired//para no instanciar, lo realiza automaticamente el framework
    ICostumerService customerService;
    @GetMapping("/listarClientes")
    public ResponseEntity<List<Customer>> findAll(){
        List<Customer> findAll= customerService.findAll();
        if(findAll == null || findAll.isEmpty()){
            return ResponseEntity.noContent().build();
        }else{
            return ResponseEntity.ok(findAll);
        }
    }
    @GetMapping("/buscarId/{id}")
    public ResponseEntity<Customer> get(@PathVariable long id){
        return customerService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/buscarNombre/{nombre}")
    public ResponseEntity<?> getByNombre(@PathVariable String nombre) throws BusinessRuleException {
        try{
            Customer cliente =customerService.getByNombre(nombre);
            return ResponseEntity.ok(cliente);
         }catch (BusinessRuleException be){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(be.getMessage());
         }
    }

    @GetMapping("/buscarApellido/{apellido}")
    public ResponseEntity<?> getByApellido(@PathVariable String apellido){
        try{
            Customer cliente =customerService.getByApellido(apellido);
            return ResponseEntity.ok(cliente);
        }catch (BusinessRuleException be){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(be.getMessage());
        }
    }

    @GetMapping("/buscarEmail/{email}")
    public ResponseEntity<?> getByEmail(@PathVariable String email){
        try{
            Customer cliente =customerService.getByEmail(email);
            return ResponseEntity.ok(cliente);
        }catch (BusinessRuleException be){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(be.getMessage());
        }
    }

    @PutMapping("/modificar/{id}")
    public ResponseEntity<?> put(@PathVariable long id, @RequestBody Customer input) throws BusinessRuleException {
        Customer save = customerService.put(id,input);
        return  new ResponseEntity<>(save,HttpStatus.CREATED);
    }
    @PostMapping("/nuevoCliente")
    public ResponseEntity<?> post(@RequestBody Customer input){
        Customer save = customerService.post(input);
        return new ResponseEntity<>(save, HttpStatus.CREATED);
    }

    @PostMapping("/validarCredenciales")
    public ResponseEntity<?> validarCredenciales(@RequestBody Credencial credencial) throws BusinessRuleException {
        if (((credencial.getCorreo() == null ||credencial.getCorreo().trim().isEmpty())
                && (credencial.getNombre() == null || credencial.getNombre().trim().isEmpty()))
                || (credencial.getContraseña() == null || credencial.getContraseña().trim().isEmpty())) {
            // Si falta alguno de los parámetros requeridos, devuelve un error
            return new ResponseEntity<>("Correo o nombre y contraseña son requeridos", HttpStatus.PARTIAL_CONTENT);
        }
        Optional<Customer> existCliente = customerService.validarCredenciales(credencial.getCorreo(), credencial.getNombre(), credencial.getContraseña());
        return new ResponseEntity<>(existCliente, HttpStatus.OK);
    }

    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> delete(@PathVariable long id) throws BusinessRuleException {
        try{
            customerService.delete(id);
            return ResponseEntity.ok().body("Se elimino el cliente n° "+id);
        }catch (BusinessRuleException be){
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Error al eliminar: " + be.getMessage());
        }
    }

}
