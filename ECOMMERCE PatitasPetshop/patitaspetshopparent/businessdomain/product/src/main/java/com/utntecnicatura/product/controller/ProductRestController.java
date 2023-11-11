package com.utntecnicatura.product.controller;
import  com.utntecnicatura.product.entities.Product;
import com.utntecnicatura.product.exception.ProductException;
import  com.utntecnicatura.product.repository.ProductRepository;
import com.utntecnicatura.product.service.ImplProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/product")
public class ProductRestController {
    private static final Logger logger = LoggerFactory.getLogger(ProductRestController.class);

    @Autowired
    ImplProductService productService;

    @GetMapping("/listarProductos")
    public ResponseEntity<List<Product>> findAll(){
        List<Product> findAll= productService.findAll();
        if(findAll == null || findAll.isEmpty()){
            logger.info("No se obtuvieron resultados");
            return ResponseEntity.noContent().build();
        }else{
            logger.info("Se obtuvieron resultados");
            return ResponseEntity.ok(findAll);
        }
    }
    @GetMapping("/obtenerProducto/{id}")
    public ResponseEntity<Product> get(@PathVariable long id){
        ResponseEntity<Product> productResponseEntity =productService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
        logger.info("Se obtuvo el siguiente resultado: "+productResponseEntity);
        return productResponseEntity;
    }

    @GetMapping("/obtenerProducto/tipo/{tipo}")
    public ResponseEntity<List<Product>> getProductoByTipo(@PathVariable String tipo){
        List<Product> productResponseEntity = productService.getByTipo(tipo);
        if(productResponseEntity == null || productResponseEntity.isEmpty()){
            logger.info("No se obtuvieron resultados");
            return ResponseEntity.noContent().build();
        }else{
            logger.info("Se obtuvieron resultados");
            return ResponseEntity.ok(productResponseEntity);
        }
    }

    @GetMapping("/obtenerProducto/anyProductByName/{nombre}")
    public ResponseEntity<List<Product>> getProductoByAnyName(@PathVariable String nombre){
        List<Product> productResponseEntity = productService.getByAnyProduct(nombre);
        if(productResponseEntity == null || productResponseEntity.isEmpty()){
            logger.info("No se obtuvieron resultados");
            return ResponseEntity.noContent().build();
        }else{
            logger.info("Se obtuvieron resultados");
            return ResponseEntity.ok(productResponseEntity);
        }
    }

    @GetMapping("/obtenerProducto/especie/{especie}")
    public ResponseEntity<List<Product>> getProductoByEspecie(@PathVariable String especie){
        List<Product> productResponseEntity = productService.getByEspecie(especie);
        if(productResponseEntity == null || productResponseEntity.isEmpty()){
            logger.info("No se obtuvieron resultados");
            return ResponseEntity.noContent().build();
        }else{
            logger.info("Se obtuvieron resultados");
            return ResponseEntity.ok(productResponseEntity);
        }
    }

    @GetMapping("/obtenerProducto/nombre/{nombre}")
    public ResponseEntity<Product> getProductoByNombre(@PathVariable String nombre){
        ResponseEntity<Product> productResponseEntity =productService.getByNombre(nombre)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
        logger.info("Se obtuvo el siguiente resultado: "+productResponseEntity);
        return productResponseEntity;
    }

    @PutMapping("/modificarProducto/{id}")
    public ResponseEntity<?> put(@PathVariable long id, @RequestBody Product input)throws ProductException{
        Product save = productService.put(id,input);
        logger.info("Se modifico el siguiente producto: "+save.getId());
        return  new ResponseEntity<>(save,HttpStatus.CREATED);

    }
    @PostMapping("/nuevoProducto")
    public ResponseEntity<?> post(@RequestBody Product input){
        try {
            Product save = productService.post(input);
            logger.info("Se creo el siguiente producto: " + save.getId());
            return new ResponseEntity<>(save, HttpStatus.CREATED);
        }catch (ProductException ex){
            logger.error("Ocurrio un error al crear el producto");
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                    .body("Error al crear: " + ex.getMessage());
        }
    }

    @DeleteMapping("/borrarProducto/{id}")
    public ResponseEntity<?> delete(@PathVariable long id){
        try{
            productService.delete(id);
            logger.info("Se elimino el siguiente producto: "+id);
            return ResponseEntity.ok().body("Se elimino el producto n° "+id);
        }catch (ProductException be){
            logger.error("Ocurrio un error al eliminar el siguiente producto: "+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Error al eliminar: " + be.getMessage());
        }
    }
    //Codigos:1-Stock ok
    //        2-Producto no se encuentra
    //        3-Stock Insuficiente
    //        4-Error
    @PostMapping("/actualizarStockProducto")
    public ResponseEntity<Integer> updateStockProduct(@RequestParam Long productId, @RequestParam int quantity ) {
        try {
            productService.updateStockProduct(productId, quantity);
            logger.info("Se actualizo el stock siguiente producto: "+productId);
            return ResponseEntity.ok(1);
        } catch (ProductException.ProductNotFoundException e) {
            logger.error("Ocurrio un error al actualizar el stock siguiente producto: "+productId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(2);
        } catch (ProductException.InsufficientStockException e) {
            logger.error("Ocurrio un error al actualizar el stock siguiente producto: "+productId);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(3);
        } catch (Exception e) {
            logger.error("Ocurrio un error al actualizar el stock siguiente producto: "+productId);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(4);
        }
    }

    @GetMapping("/obtenerStockProducto/{id}")
    public ResponseEntity<String> consultarStockProduct(@RequestParam Long productId) {
        try{
            Integer stockProduct =productService.findStockProductById(productId);
            logger.info("Se consulto el stock siguiente producto: "+productId);
            return ResponseEntity.ok(String.valueOf(stockProduct));
        }catch (Exception be){
            logger.error("Ocurrio un error al consultar el stock siguiente producto: "+productId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(be.getMessage());
        }
    }



}
