package com.utntecnicatura.product.entities;

import com.utntecnicatura.product.enums.Especie;
import com.utntecnicatura.product.enums.Tipo;
import lombok.AllArgsConstructor;
import lombok.Data;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = "codigo"),
        @UniqueConstraint(columnNames = "nombre")
})
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String codigo;
    private String nombre;
    private double precio;
    private Tipo tipo;
    private Especie especie;
    private int stock;
    private String imagen;
}
