package com.utntecnicatura.product.service;

import com.utntecnicatura.product.entities.Product;
import com.utntecnicatura.product.exception.ProductException;
import com.utntecnicatura.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImplProductService implements IProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ImplProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Optional<Product> findById(Long id) throws ProductException.ProductNotFoundException{
        Optional<Product> product= productRepository.findById(id);
        if(product.isPresent()) {
            return product;
        }else{
            throw new ProductException.ProductNotFoundException("error-1001",
                    "Error de validacion, El producto N° "+id+" no existe", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product get(Long id) throws ProductException.ProductNotFoundException {
        Product product= productRepository.findById(id).get();
        if(product!=null) {
            return product;
        }else{
            throw new ProductException.ProductNotFoundException("error-1001",
                    "Error de validacion, El producto N° "+id+" no existe", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Optional<Product> getByNombre(String nombre) throws ProductException.ProductNotFoundException {
        Optional<Product> product= Optional.ofNullable(productRepository.findByNombre(nombre));
        if(product.isPresent()) {
            return product;
        }else{
            throw new ProductException.ProductNotFoundException("error-1001",
                    "Error de validacion, El producto: "+nombre+" no existe", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public List<Product> getByTipo(String tipo) throws ProductException.ProductNotFoundException {
        List<Product> product= productRepository.findProductByTipo(tipo);
        if(product!=null) {
            return product;
        }else{
            throw new ProductException.ProductNotFoundException("error-1001",
                    "Error de validacion, El tipo de producto : "+tipo+" no existe", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public List<Product> getByEspecie(String especie) throws ProductException.ProductNotFoundException {
        List<Product> product= productRepository.findProductByEspecie(especie);
        if(product!=null) {
            return product;
        }else{
            throw new ProductException.ProductNotFoundException("error-1001",
                    "Error de validacion, No existen productos para la especie: "+especie, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public List<Product> getByAnyProduct(String nombre) throws ProductException.ProductNotFoundException {
        List<Product> product= productRepository.findAnyProductByNombre(nombre);
        if(product!=null) {
            return product;
        }else{
            throw new ProductException.ProductNotFoundException("error-1001",
                    "Error de validacion, No existen productos que comienzen con el nombre: "+nombre, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Product put(Long id, Product input) throws ProductException.ProductNotFoundException {
        Optional<Product> product = productRepository.findById(id);
        if(product.isPresent()){
            Product find = product.get();
            find.setNombre(input.getNombre()!=null?input.getNombre(): find.getNombre());
            find.setPrecio(input.getPrecio()>0?input.getPrecio(): find.getPrecio());
            find.setStock(input.getStock()>0?input.getStock(): find.getStock());
            find.setImagen(input.getImagen());
            return productRepository.save(find);
        }else{
            throw new ProductException.ProductNotFoundException("error-1001",
                    "Error de validacion, El producto n°: "+id+" no existe", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public Product post(Product input) {
        try {
            return productRepository.save(input);
        } catch (DataIntegrityViolationException ex) {
            throw new ProductException.DuplicateProductException("Producto existente en los registros", ex);
        }
    }

    @Override
    public void delete(Long id) throws ProductException.ProductNotFoundException {
        Optional<Product> customer=productRepository.findById(id);
        if(customer.isPresent()) {
            productRepository.deleteById(customer.get().getId());
        }else{
            throw new ProductException.ProductNotFoundException("error-1001",
                    "Error de validacion, El producto n°: "+id+" no existe", HttpStatus.NOT_FOUND);

        }
    }

    @Override
    public void updateStockProduct(Long productId, int quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ProductException.ProductNotFoundException("Producto no encontrado"));

        if (product.getStock() < quantity) {
            throw new ProductException.InsufficientStockException("Stock insuficiente");
        }

        // Actualizar el stock después de la compra
        product.setStock(product.getStock() - quantity);
        productRepository.save(product);
    }

    @Override
    public Integer findStockProductById(Long productId) {
        String stockBase=productRepository.findStockById(productId);
        Integer stockProduct= stockBase!=null?Integer.parseInt(stockBase):null;
        if(stockProduct!=null) {
            return stockProduct;
        }else{
            throw new ProductException.ProductNotFoundException("error-1001",
                    "Error de validacion, El producto N° : "+productId+" no existe", HttpStatus.NOT_FOUND);
        }
    }
}
