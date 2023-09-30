package com.utntecnicatura.product.enums;

public enum Especie {
    GATO("01", "Gatos"),
    PERRO("02", "Perros"),
    OTROS("03", "Otros");

    private final String codigo;
    private final String descripcion;

    private Especie(String codigo, String descripcion) {
        this.codigo = codigo;
        this.descripcion = descripcion;
    }

    public String getCodigo() {
        return codigo;
    }

    public String getDescripcion() {
        return descripcion;
    }
}
