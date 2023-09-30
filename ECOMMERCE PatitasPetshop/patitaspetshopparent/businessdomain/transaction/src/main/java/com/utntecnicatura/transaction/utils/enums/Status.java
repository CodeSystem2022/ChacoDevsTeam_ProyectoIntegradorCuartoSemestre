package com.utntecnicatura.transaction.utils.enums;

public enum Status {
    PENDIENTE("01", "Pendiente"),
    LIQUIDADA("02", "Liquidada"),
    RECHAZADA("03", "Rechazada"),
    CANCELADA("04", "Cancelada");

    private final String codigo;
    private final String descripcion;

    private Status(String codigo, String descripcion) {
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
