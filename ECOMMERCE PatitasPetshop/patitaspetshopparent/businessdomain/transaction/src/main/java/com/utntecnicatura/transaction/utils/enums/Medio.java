package com.utntecnicatura.transaction.utils.enums;

public enum Medio {

    MERCADO_PAGO("01", "Mercado Pago"),
    TARJETA_CREDITO("02", "Tarjeta Credito"),
    EFECTIVO("03", "Efectivo");

    private final String codigo;
    private final String descripcion;

    private Medio(String codigo, String descripcion) {
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
