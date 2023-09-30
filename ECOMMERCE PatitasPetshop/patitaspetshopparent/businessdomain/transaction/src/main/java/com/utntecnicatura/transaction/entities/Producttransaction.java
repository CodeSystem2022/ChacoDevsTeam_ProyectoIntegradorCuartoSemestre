package com.utntecnicatura.transaction.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Producttransaction {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    private Long idProducto;
    private Integer cantidadProducto;
    @JsonIgnore//it is necesary for avoid infinite recursion
    @ManyToOne(fetch = FetchType.LAZY,targetEntity = Transaction.class)
    @JoinColumn(name = "transactionId", nullable = true)
    private Transaction transaction;
}

