package com.utntecnicatura.customer.common;

import io.swagger.annotations.ApiModelProperty;
/*
"El esfuerzo por estandarizar los informes de errores de las API REST es
respaldado por el ITEF (Internet Engineering Task Force), una organización
de estándares abiertos que desarrolla y promueve estándares voluntarios de
Internet, en el RFC 7807, que creó un esquema generalizado de manejo de
errores compuesto por cinco partes.
        Tipo: un identificador URI que categoriza el error.
        Título: un mensaje breve y legible por humanos sobre el error.
        Código: el código de error único.
        Detalle: una explicación legible por humanos del error.
        Instancia: un URI que identifica la ocurrencia específica del error.
*/

public class StandarizedApiExceptionResponse {
    @ApiModelProperty(notes = "El identificador único URI que categoriza el error", name = "type",
            required = true, example = "/errors/authentication/not-authorized")
    private String type ="/errors/uncategorized";
    @ApiModelProperty(notes = "Un mensaje breve y legible por humanos sobre el error", name = "title",
            required = true, example = "El usuario no tiene autorización")
    private String title;
    @ApiModelProperty(notes = "El código de error único", name = "code",
            required = false, example = "192")
    private String code;
    @ApiModelProperty(notes = "Una explicación legible por humanos del error", name = "detail",
            required = true, example = "El usuario no tiene los permisos adecuados para acceder al "
            + "recurso, por favor contáctenos en @patitaspetsshop")
    private String detail;
    @ApiModelProperty(notes = "Un URI que identifica la ocurrencia específica del error", name = "detail",
            required = true, example = "/errors/authentication/not-authorized/01")
    private String instance ="/errors/uncategorized/bank";

    public StandarizedApiExceptionResponse(String title, String code, String detail) {
        super();
        this.title = title;
        this.code = code;
        this.detail = detail;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStatus() {
        return code;
    }

    public void setStatus(String status) {
        this.code = status;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getInstance() {
        return instance;
    }

    public void setInstance(String instance) {
        this.instance = instance;
    }
}
