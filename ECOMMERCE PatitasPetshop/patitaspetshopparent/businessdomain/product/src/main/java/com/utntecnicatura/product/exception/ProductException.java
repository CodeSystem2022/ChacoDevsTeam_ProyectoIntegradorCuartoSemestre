package com.utntecnicatura.product.exception;

import org.springframework.http.HttpStatus;

public class ProductException extends RuntimeException {
    private long id;
    private String code;
    private HttpStatus httpStatus;

    public ProductException() {
        super();
    }

    public ProductException(String message) {
        super(message);
    }

    public ProductException(String message, Throwable cause) {
        super(message, cause);
    }

    public ProductException(Throwable cause) {
        super(cause);
    }

    public static class ProductNotFoundException extends ProductException {
        public ProductNotFoundException() {
            super();
        }

        public ProductNotFoundException(String message) {
            super(message);
        }

        public ProductNotFoundException(String message, Throwable cause) {
            super(message, cause);
        }

        public ProductNotFoundException(String code, String message, HttpStatus httpStatus) {
            super(message);
            super.code = code;
            super.httpStatus = httpStatus;
        }

        public ProductNotFoundException(Throwable cause) {
            super(cause);
        }
    }

    public static class InsufficientStockException extends ProductException {

        public InsufficientStockException() {
            super();
        }

        public InsufficientStockException(String message) {
            super(message);
        }

        public InsufficientStockException(String message, Throwable cause) {
            super(message, cause);
        }

        public InsufficientStockException(Throwable cause) {
            super(cause);
        }
    }

    public static class DuplicateProductException extends ProductException {

        public DuplicateProductException() {
            super();
        }

        public DuplicateProductException(String message) {
            super(message);
        }

        public DuplicateProductException(String message, Throwable cause) {
            super(message, cause);
        }

        public DuplicateProductException(Throwable cause) {
            super(cause);
        }
    }

}
