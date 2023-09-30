package com.utntecnicatura.transaction.entities;

import com.utntecnicatura.transaction.utils.enums.Medio;
import com.utntecnicatura.transaction.utils.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String referencia;
    private long idCliente;
    private Date fechaTransaccion;
    private double monto;
    private String descripcion;
    private Status estado;
    private Medio canal;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "transaction", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Producttransaction> producttransactions;
}
