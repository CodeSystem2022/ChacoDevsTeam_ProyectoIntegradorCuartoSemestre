package com.utntecnicatura.product.service;

import com.utntecnicatura.product.entities.Product;
import com.utntecnicatura.product.exception.ProductException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

public interface IProductService {

    Optional<Product> findById(Long id)throws ProductException.ProductNotFoundException;
    Optional<Product> getByNombre(String nombre) throws ProductException.ProductNotFoundException;
    List<Product> getByEspecie(String especie) throws ProductException.ProductNotFoundException;
    List<Product> getByAnyProduct(String nombre) throws ProductException.ProductNotFoundException;
    List<Product> getByTipo(String tipo) throws ProductException.ProductNotFoundException;
    List<Product> findAll();
    Product get(Long id) throws ProductException.ProductNotFoundException;
    Product put(Long id, Product input) throws ProductException.ProductNotFoundException ;
    Product post(Product input);
    void delete(Long id) throws ProductException.ProductNotFoundException;
    void updateStockProduct(Long productId,int quantity);
    Integer findStockProductById(Long productId);

}
