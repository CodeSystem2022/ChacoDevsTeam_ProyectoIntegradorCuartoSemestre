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

 ![6](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/60bbd961-9807-4a18-addc-cfbed2d35862)

 a.Accede al panel de administración de Spring Admin para monitorear y gestionar los microservicios.

 ![7](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/ae0db602-9a02-47fe-b9a7-0a4f331b0a44)

 ![8](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/cbd7b6ea-2e9c-4690-8e63-dddf799e6d71)

### Eureka Discovery

Eureka Discovery es un servicio de registro y descubrimiento que permite que los microservicios se registren automáticamente y se descubran entre sí. Esto facilita la comunicación entre los microservicios sin necesidad de conocer las ubicaciones exactas de los demás. Se accede través de la URL [http://localhost:8761](http://localhost:8761)

![9](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/ff4d9ef7-f256-434e-aa5b-6f363acf4b6c)

### Spring Config (Repositorio remoto)

Spring Config es un sistema de gestión de configuración que centraliza la configuración de todos los microservicios. Utilizamos un repositorio remoto para almacenar la configuración de los microservicios y garantizar la coherencia y la fácil administración de la configuración. Se accede través de la URL [http://localhost:8888](http://localhost:8888)
User: admin
Password: qwerty
Development: Nos muestra las configuraciones para un ambiente de desarrollo

URL: [Development](http://localhost:8888/config-client/development)

![10](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/fcc2b680-cd72-4f94-a6b1-728aa988aaa7)

Production: Nos muestra las configuraciones para un ambiente de de produccion

URL: [Production](http://localhost:8888/config-client/production)

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/5b876153-1f3a-413f-a37e-373138316cc2)

## Negocio

El dominio de Negocio se compone de varios microservicios que gestionan diferentes aspectos de la aplicación. Aquí, se describen los principales microservicios de Negocio:

Utilizaremos la interfaz SWAGGER para visibilizar y realizar las pruebas sobre los endpoints 

### CUSTOMER

El microservicio CUSTOMER se encarga de la gestión de clientes y ofrece las siguientes funcionalidades:

- CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar los datos de los clientes.
- Métodos para controlar el stock de productos relacionados con cada cliente.
 Se accede través de la URL [http://localhost:8081/swagger-ui/index.html#/](http://localhost:8081/swagger-ui/index.html#/)

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/5e04b34c-969f-4117-bf95-2e5035d6e34e)

### PRODUCT

El microservicio PRODUCT se encarga de la gestión de productos y ofrece las siguientes funcionalidades:

- CRUD (Crear, Leer, Actualizar y Eliminar) para gestionar los datos de los productos.
- Métodos para controlar el stock de productos y gestionar su disponibilidad.
 Se accede través de la URL [http://localhost:8083/swagger-ui/index.html#/](http://localhost:8083/swagger-ui/index.html#/)

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/9c0da896-adcd-40dc-9093-b2e2e770fd1b)

### TRANSACTIONS

El microservicio TRANSACTIONS se encarga de gestionar las transacciones de compra de productos y vincular datos de clientes (CUSTOMER) con los productos comprados (PRODUCT). Sus funcionalidades incluyen:

- Registro de transacciones de compra.
- Vinculación de datos de clientes y productos en cada transacción.
 Se accede través de la URL [http://localhost:8082/swagger-ui/index.html#/](http://localhost:8082/swagger-ui/index.html#/)

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/84ba30eb-a8a4-4088-b8a1-bca3ee1cae86)

### PostgreSQL
Mediante el docker-compose se genera una contenedor con un imagen de Postgresql este volumen sera donde se guarden los datos permanentemente.

### PGAdmin 4 
Mediante el docker-compose se genera una contenedor con un imagen de PGAdmin 4 en el cual podremos acceder al schema de produccion, Se accede través de la URL [http://localhost:80](http://localhost:80)
        
a. Ingresar con el usuario admin@admin.com password: qwerty 
       
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/cb96bb22-5371-4dce-bac1-ca745a94f96b)
       
Esta seccion se puede modificar desde el docker-compose
       
![1](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/afafed3e-e313-40c5-8c2b-585df3a5db8a)
       
b. Una vez ingresado se debe registrar un server nuevo:
       
![2](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/26a475cb-545f-499a-9183-f67b6fffa8b6)
       
c. Configurar los siguientes campos de la siguiente manera:     
        
![3](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/6cda4cf0-e3e4-4572-b3b5-73711f270a4a)
        
![4](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/8ad154db-e91a-4853-97e1-e5ebf546f244)
       
d. Luego SAVE
       
e.Si todo salio correcto y los microservicios de COSTUMER PRODUCT Y TRANSACTION se iniciaron correctamente se tendrian que haber creado sus correspondientes tablas en el esquema "SPRINGBOOTSCHEMA"
       
![5](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/a0539540-9ce2-411a-9012-e12b805e16b8)

## Instrucciones de Uso

Para utilizar esta infraestructura de microservicios, sigue estos pasos:

1. Clona este repositorio a tu máquina local.

2. Inicia los componentes de infraestructura y negocio (Spring Admin, Eureka Discovery, Spring Config, customer, product ,transaction) utilizando Docker Compose en modo daemon (background) con el siguiente comando:
  
   a. Se debe correr el comando de mvn clean install a todos los microservicios comenzando por los de infraestructura y luego los de negocio.

    b. Tambien mediante las tareas de maven que nos proporciona Intellij IDEA, CLEAN -> COMPILE -> INSTALL
   
   ![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/921b9d8d-ebed-4bfc-b84a-1627c6a5bb07)
   
   c. Esto ira generando las imagenes de docker, se debe realizar solo una vez.
   
#### Comandos docker de utilidad:

Una vez realizado el proceso de maven en los 6 microservicios, se debera abrir una terminal en la path donde se encuentra el docker-compose, "..\Chaco Devs Team-Proyecto Integrador\ChacoDevsTeam_ProyectoIntegradorCuartoSemestre\ECOMMERCE PatitasPetshop\patitaspetshopparent>" y ejecutar el siguiente comando

1- Iniciar los contenedores dockerizados:

docker-compose up -d

Donde se iran iniciando cada microservicio en el orden determinado para que primero se levanten los de infraestructura y por ultimo los de negocio.

2- En caso de realizar alguna modificacion de codigo o propiedades a algun microservicio se debera ejecutar el comando: 

docker-compose up -d --force-recreate

3- Si necesita detener los contenedores: docker-compose stop

4- Si necesita eliminar los volumenes: docker-compose rm (Tener cuidado con el siguiente comando al eliminar un volumen puede perder la base de postgresql)

Recuerda configurar adecuadamente las propiedades de cada microservicio en el docker-compose para garantizar su correcto funcionamiento (Development/Production), tan solo cambiando un valor a una variable :

-Dspring.profiles.active=production 

-Dspring.profiles.active=development

Como cada microservicio es independiente tenemos la chance de estar trabajando algunos en modo productivo o en modo desarrollo.

En este caso el microservicio de transacciones estara en un ambiente productivo, implica el uso de la configuracion de base de datos de postgres

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/7251066a-93aa-4281-b340-4be389d862c8)

En este caso el microservicio de clientes estara en un ambiente de desarrollo, implica el uso de la configuracion de base de datos en memoria H2

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/7e542a83-c6c8-4972-a75f-d6718874237e)



