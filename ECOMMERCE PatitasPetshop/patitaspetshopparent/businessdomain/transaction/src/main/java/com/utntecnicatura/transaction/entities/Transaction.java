package com.utntecnicatura.transaction.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.utntecnicatura.transaction.utils.enums.Medio;
import lombok.AllArgsConstructor;
import lombok.Data;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

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
    private long idCliente;
    @CreationTimestamp
    @Column(name = "fecha_transaccion", updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy HH:mm:ss", timezone = "America/Argentina/Buenos_Aires")
    private Date fechaTransaccion;
    private double monto;
    private String descripcion;
    private Medio canal;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "transaction", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Producttransaction> producttransactions;
}
