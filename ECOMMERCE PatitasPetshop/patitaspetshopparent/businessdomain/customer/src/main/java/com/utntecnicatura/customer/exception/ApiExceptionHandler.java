package com.utntecnicatura.customer.exception;

import com.github.javafaker.Business;
import com.utntecnicatura.customer.common.StandarizedApiExceptionResponse;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.io.IOException;
import java.net.UnknownHostException;

/*
Las comunicaciones HTTP estándar tienen cinco niveles de códigos de respuesta:
Nivel 100 (Informativo) — El servidor reconoce una solicitud, lo que significa que la solicitud fue recibida y entendida;
es una respuesta transitoria que alerta al cliente sobre la espera de una respuesta.
Nivel 200 (Éxito) — El servidor completó la solicitud como se esperaba.
Nivel 300 (Redirección) — El cliente debe realizar acciones adicionales para completar la solicitud.
Nivel 400 (Error del cliente) — El cliente envió una solicitud inválida.
Nivel 500 (Error del servidor) — El servidor no pudo cumplir una solicitud válida debido a un error en el servidor.
El objetivo de manejar las excepciones es proporcionar al cliente un código apropiado y
información comprensible adicional para ayudar a solucionar el problema.
La parte del mensaje del cuerpo debe estar presente como interfaz de usuario, incluso si
el cliente envía un encabezado Accept-Language (por ejemplo, en inglés o francés); debemos traducir la parte del título
al idioma del cliente si admitimos la internacionalización; el detalle está destinado a los desarrolladores
de clientes, por lo que la traducción no es necesaria. Si es necesario informar más de un error, podemos responder con una lista de errores.
*/
@RestControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(UnknownHostException.class)
    public ResponseEntity<StandarizedApiExceptionResponse> handleUnknownHostExceptionException(UnknownHostException ex){
        StandarizedApiExceptionResponse response = new StandarizedApiExceptionResponse("Error de Conexion","error-1024", ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.PARTIAL_CONTENT);
    }
    @ExceptionHandler(BusinessRuleException.class)
    public ResponseEntity<StandarizedApiExceptionResponse> handleBussinesRuleException(BusinessRuleException ex) {
        StandarizedApiExceptionResponse response = new StandarizedApiExceptionResponse("Error de validacion",ex.getCode(),ex.getMessage());
        return new ResponseEntity(response, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<StandarizedApiExceptionResponse> handleDataIntegrityViolationException(DataIntegrityViolationException ex) {
        StandarizedApiExceptionResponse response = new StandarizedApiExceptionResponse("Error de integridad de datos", "error-5001", ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }


}
