# CHACO DEVS TEAM - PROYECTO INTEGRADOR

<p align="center">
    <img width="100%" src="https://user-images.githubusercontent.com/70241433/233533920-47091762-ed02-441c-bcb9-02b0112a2dc4.gif"> 
</p>

# **Integrantes**

:godmode:Balbuena, Fernando Nicolas 

:godmode:Espinola, Renzo Oscar    

:godmode:Giménez Ríos, Tatiana T.  

:godmode:Gutiérrez, Juana Natalia   

:godmode:Gutiérrez, Alejo Hernán 

:godmode:Gutiérrez, Juan Carlos 

:godmode:Gutiérrez, René Agustín

:godmode:Iván, Matías 

:godmode:Rossi, Ludmila

:godmode:Valdez, Carlos Federico

:godmode:Valladares, Juan Ignacio

# BACKEND

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/7862184c-c060-4eac-999b-ad2ae4fc8147)

# Infraestructura de Microservicios con Spring Boot 3 , Java 17 y Docker

Este repositorio contiene una infraestructura de microservicios desarrollada con Spring Boot 3 y Java 17, que se divide en dos dominios principales: Infraestructura y Negocio. Aquí encontrarás información sobre cada uno de estos componentes y cómo se relacionan entre sí.

## Infraestructura

La infraestructura de microservicios se encarga de proporcionar las herramientas necesarias para que los microservicios de negocio funcionen de manera eficiente y escalable. En este repositorio, hemos implementado los siguientes componentes de infraestructura:

### Spring Admin

Spring Admin es una herramienta que proporciona un panel de administración para monitorear y gestionar los microservicios de manera centralizada. Puedes acceder al panel de administración de Spring Admin a través de la URL [http://localhost:8762](http://localhost:8762) una vez que los microservicios estén en ejecución.

### Eureka Discovery

Eureka Discovery es un servicio de registro y descubrimiento que permite que los microservicios se registren automáticamente y se descubran entre sí. Esto facilita la comunicación entre los microservicios sin necesidad de conocer las ubicaciones exactas de los demás. Se accede través de la URL [http://localhost:8761](http://localhost:8761)

### Spring Config (Repositorio remoto)

Spring Config es un sistema de gestión de configuración que centraliza la configuración de todos los microservicios. En este repositorio, utilizamos un repositorio remoto para almacenar la configuración de los microservicios y garantizar la coherencia y la fácil administración de la configuración. Se accede través de la URL [http://localhost:8888](http://localhost:8888)

## Negocio

El dominio de Negocio se compone de varios microservicios que gestionan diferentes aspectos de la aplicación. Aquí, se describen los principales microservicios de Negocio:

Utilizaremos la interfaz SWAGGER para visibilizar y realizar las pruebas sobre los endpoints 

### CUSTOMER

El microservicio CUSTOMER se encarga de la gestión de clientes y ofrece las siguientes funcionalidades:

- CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar los datos de los clientes.
- Métodos para controlar el stock de productos relacionados con cada cliente.
 Se accede través de la URL [http://localhost:8081/swagger-ui/index.html#/](http://localhost:8081/swagger-ui/index.html#/)

### PRODUCT

El microservicio PRODUCT se encarga de la gestión de productos y ofrece las siguientes funcionalidades:

- CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar los datos de los productos.
- Métodos para controlar el stock de productos y gestionar su disponibilidad.
 Se accede través de la URL [http://localhost:8083/swagger-ui/index.html#/](http://localhost:8083/swagger-ui/index.html#/)

### TRANSACTIONS

El microservicio TRANSACTIONS se encarga de gestionar las transacciones de compra de productos y vincular datos de clientes (CUSTOMER) con los productos comprados (PRODUCT). Sus funcionalidades incluyen:

- Registro de transacciones de compra.
- Vinculación de datos de clientes y productos en cada transacción.
 Se accede través de la URL [http://localhost:8082/swagger-ui/index.html#/](http://localhost:8082/swagger-ui/index.html#/)

### PGAdmin 4 
Mediante el docker-compose se genera una contenedor con un imagen de PGAdmin 4 en el cual podremos acceder al schema de produccion, Se accede través de la URL [http://localhost:80](http://localhost:80)
        a. Ingresar con el usuario admin@admin.com password: qwerty 
        ![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/cb96bb22-5371-4dce-bac1-ca745a94f96b)
        Esta seccion se puede modificar desde el docker-compose
        b. Una vez ingresado se debe registrar un server nuevo:
    


### PostgreSQL
Mediante el docker-compose se genera una contenedor con un imagen de Postgresql este volumen sera donde se guarden los datos permanentemente.

## Instrucciones de Uso

Para utilizar esta infraestructura de microservicios, sigue estos pasos:

1. Clona este repositorio a tu máquina local.

2. Inicia los componentes de infraestructura y negocio (Spring Admin, Eureka Discovery, Spring Config, customer, product ,transaction) utilizando Docker Compose en modo daemon (background) con el siguiente comando:

#### Comandos docker de utilidad:

Iniciar los contenedores dockerizados: docker-compose up -d

Detener los contenedores: docker-compose stop

Eliminar los volumenes: docker-compose rm (Tener cuidado con el siguiente comando al eliminar un volumen puede perder la base de postgresql)

Donde se iran iniciando cada microservicio en el orden determinado para que primero se levanten los de infraestructura y por ultimo los de negocio.

4. Accede al panel de administración de Spring Admin para monitorear y gestionar los microservicios.

5. Utiliza los microservicios de Negocio (CUSTOMER, PRODUCT, TRANSACTIONS) según tus necesidades específicas.

Recuerda configurar adecuadamente las propiedades de cada microservicio en el repositorio remoto de Spring Config para garantizar su correcto funcionamiento.

