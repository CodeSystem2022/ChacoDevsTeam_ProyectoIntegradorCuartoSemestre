package com.utntecnicatura.product.enums;

public enum Tipo {
    ALIMENTO("01", "Almiento balanceado"),
    ACCESORIO("02", "Accesorios para mascotas"),
    HIGIENE("03", "Elementos para higiene");

    private final String codigo;
    private final String descripcion;

    private Tipo(String codigo, String descripcion) {
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
