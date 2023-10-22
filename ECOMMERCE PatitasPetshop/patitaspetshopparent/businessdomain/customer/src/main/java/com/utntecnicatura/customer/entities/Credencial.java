package com.utntecnicatura.customer.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Credencial {
    private String correo;
    private String nombre;
    private String contraseña;
}
