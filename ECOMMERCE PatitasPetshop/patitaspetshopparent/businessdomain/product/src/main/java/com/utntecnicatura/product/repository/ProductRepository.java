package com.utntecnicatura.product.repository;

import com.utntecnicatura.product.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT c FROM Product c WHERE c.nombre = ?1")
    public Product findByNombre(String nombre);

    @Query("SELECT stock FROM Product c WHERE c.id = ?1")
    public String findStockById(Long id);

    @Query("SELECT c FROM Product c WHERE c.tipo = ?1")
    public List<Product> findProductByTipo(String tipo);

    @Query("SELECT c FROM Product c WHERE c.especie = ?1")
    public List<Product> findProductByEspecie(String especie);

    @Query("SELECT c FROM Product c WHERE c.nombre LIKE %?1%")
    List<Product> findAnyProductByNombre(String nombre);
}

