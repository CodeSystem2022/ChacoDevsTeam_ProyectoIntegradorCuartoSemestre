package com.utntecnicatura.transaction.utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.utntecnicatura.transaction.entities.Producttransaction;
import com.utntecnicatura.transaction.entities.Transaction;
import com.utntecnicatura.transaction.exception.BusinessRuleException;
import com.utntecnicatura.transaction.mcsClients.MicroserviceClients;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.net.UnknownHostException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Component
public class UtilsTransaction {

    @Autowired
    MicroserviceClients microserviceClients;
    public UtilsTransaction(){}

    public boolean validarStock(Transaction transaction,JsonNode jsonTransaction){
        String idProductoTransaction=jsonTransaction.get("id").asText();
        Optional<Producttransaction> oProductoTransaction = transaction.getProducttransactions()
                .stream()
                .filter(p -> p.getIdProducto().equals(Long.valueOf(idProductoTransaction)))
                .findAny();

        if(oProductoTransaction.isPresent()) {
            Producttransaction productoBase = oProductoTransaction.get();
            Integer stockProdReal = jsonTransaction.has("stock")
                    ? Integer.parseInt(jsonTransaction.get("stock").asText())
                    : 0;

            return productoBase.getCantidadProducto() < stockProdReal;
        }
        return false;
    }

    public boolean validarMonto(double amount){
        if(amount>0 || amount < 0){
            return true;
        }else
            return false;
    }

    public void validarCliente(Transaction transaction) throws UnknownHostException, BusinessRuleException {
        JsonNode jsonCliente = microserviceClients.getClienteConnection(transaction.getIdCliente());
        if (jsonCliente== null || jsonCliente.isEmpty()) {
            BusinessRuleException exception = new BusinessRuleException("1025",
                    "Error de validacion, El cliente n°:"+transaction.getIdCliente()+" no existe", HttpStatus.PRECONDITION_FAILED);
            throw exception;
        }
    }

    public void validarProductos(Transaction transaction) throws UnknownHostException, BusinessRuleException {
        List<Producttransaction> idProductosCantidad = transaction.getProducttransactions();
        for(Producttransaction productTransaction:idProductosCantidad) {
            JsonNode jsonCliente = microserviceClients.getProductConnection(productTransaction.getIdProducto());
            if (jsonCliente == null || jsonCliente.isEmpty()) {
                BusinessRuleException exception = new BusinessRuleException("1025",
                        "Error de validacion, El producto n°:" +productTransaction.getIdProducto()+ " no existe", HttpStatus.PRECONDITION_FAILED);
                throw exception;
            }else if(!validarStock(transaction,jsonCliente)){
                BusinessRuleException exception = new BusinessRuleException("1026",
                        "Error de validacion, El producto n°:" +productTransaction.getIdProducto()+ " no tiene stock suficiente", HttpStatus.PRECONDITION_FAILED);
                throw exception;
            }
            microserviceClients.updateStockProductConnection(String.valueOf(productTransaction.getIdProducto()),String.valueOf(productTransaction.getCantidadProducto()));
        }
    }

}

