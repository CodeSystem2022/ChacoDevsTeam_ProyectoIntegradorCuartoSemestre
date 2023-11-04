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

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/92d0e198-0c0d-4e51-964a-1f7ce123f5e2)

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

### Persistencia de los datos
Mediante la configuracion seteada previamente en el docker-compose.yml podemos optar en tres modos de persistencia de datos dependiendo de la rigurosidad de las pruebas:

#### H2 (Development)

H2 es una base de datos relacional ligera, rápida y versátil, adecuada para una variedad de aplicaciones:

- Portabilidad: H2 puede funcionar en diferentes plataformas y sistemas operativos, lo que facilita su implementación en una variedad de entornos.

- Rendimiento: Es conocida por su rendimiento rápido y eficiente, lo que la convierte en una opción popular para aplicaciones que requieren consultas rápidas y procesamiento de datos.

- Modo Embebido: Puede integrarse fácilmente en aplicaciones Java como una biblioteca, lo que significa que puede ejecutarse en el mismo proceso que la aplicación, sin necesidad de un servidor de base de datos separado.

- Compatibilidad con Estándares SQL: H2 es compatible con los estándares SQL ANSI, lo que facilita la migración de otras bases de datos relacionales a H2.

- Características Avanzadas: A pesar de su tamaño compacto, H2 ofrece muchas características avanzadas como compatibilidad con procedimientos almacenados, disparadores, encriptación y replicación.

- Consola Web: H2 incluye una consola web fácil de usar que permite administrar y visualizar datos de manera gráfica.


      <dependencies>
    	     <dependency>
       		 <groupId>com.h2database</groupId>
       	         <artifactId>h2</artifactId>
                 </dependency>
       </dependencies>


#### MySQL (Productivo)

MySQL es un sistema de gestión de bases de datos relacional (RDBMS por sus siglas en inglés) de código abierto y gratuito. Es uno de los sistemas de bases de datos más populares en el mundo y es ampliamente utilizado en aplicaciones web y empresariales.

- Base de Datos Relacional: MySQL es un sistema de base de datos relacional, lo que significa que organiza los datos en tablas relacionadas entre sí. Cada tabla consta de filas y columnas, y se pueden establecer relaciones entre diferentes tablas utilizando claves primarias y foráneas.

- Lenguaje SQL: MySQL utiliza Structured Query Language (SQL) para gestionar y manipular datos. SQL es un lenguaje estándar utilizado para crear, leer, actualizar y eliminar datos en bases de datos relacionales.

- Multiusuario y Multihilo: MySQL es capaz de manejar múltiples usuarios concurrentes y múltiples conexiones al mismo tiempo. También es multihilo, lo que significa que puede realizar múltiples operaciones en paralelo para mejorar el rendimiento.

- Escalabilidad: MySQL es altamente escalable, lo que significa que puede manejar grandes volúmenes de datos y un alto número de usuarios simultáneos. Es adecuado tanto para aplicaciones pequeñas como para grandes sistemas empresariales.

- Portabilidad: MySQL es compatible con varias plataformas, incluyendo Windows, Linux, macOS y otras. Esto significa que una base de datos MySQL creada en un sistema operativo se puede transferir y utilizar en otro sistema operativo sin problemas.

- Almacenamiento de Datos Seguro: MySQL proporciona funciones de seguridad robustas para proteger los datos, incluyendo la autenticación de usuarios, la autorización basada en roles y la encriptación de datos para mantener la confidencialidad.

- Comunidad Activa: MySQL tiene una comunidad de usuarios y desarrolladores muy activa. Esto significa que hay una gran cantidad de recursos, documentación y soporte disponibles en línea.

- Motor de Almacenamiento: MySQL permite utilizar diferentes motores de almacenamiento para sus tablas, como InnoDB (el motor de almacenamiento por defecto con soporte de transacciones ACID) y MyISAM (un motor de almacenamiento más antiguo, pero rápido para aplicaciones que no requieren transacciones complejas).

        <dependency>
		    <groupId>com.mysql</groupId>
		    <artifactId>mysql-connector-j</artifactId>
	     <scope>runtime</scope>
       </dependency>
      
#### MySQL Workbench (Productivo)

Al inicializarse los microservicios se generara automaticamente la BD (Springboot) y las tablas correspondientes para cada microservicio de negocio
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/26790e51-6489-4a72-87f2-7bb099840a6f)

![n 1](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/37600620-6227-4a53-9793-1c328e6a615d)

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/39335c9a-2d65-4451-bf85-a2a08283791e)

#### MySQL Workbench https://localhost:3001 (Productivo)

Tambien se cuenta con la posibildad de ingresar al aplicativo de MySQL Workbench mediante la siguiente URL: https://localhost:3001 (*NOTA: prestar atencion al https posee la s al final*)

1. Ingresar a la url  https://localhost:3001
   
	a. En caso de advertencia de seguridad realizar los siguientes pasos:

	1. Clickear en Configuracion avanzada
   
 	2. Acceder a locahost
   
	![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/cd4b8ec3-e889-4791-a7b7-d3eceb0e6af7)

3. Si accedemos por primera vez al entorno de MySQL Workbench, debemos realizar la configuracion de la conexion con la BD
   	a. Clickeamos en el + MySQL Connections y configuramos de la siguiente manera:
   	1. Connection name: patitaspetshop connection
   	2. hostname: host.docker.internal
   	3. port: 3306
   	4. username: root
   	5. password: admin
   
![n 2](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/1bb4d2a0-f70e-454f-ba20-ce669f09aa68)

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/f11a149c-4085-4d55-8318-aa047a7d750f)

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/fe168338-3445-4645-abe6-8d03dfc536cb)


## Instrucciones de Uso

Para utilizar esta infraestructura de microservicios, sigue estos pasos:

1. Clona este repositorio a tu máquina local.
   
- Es requerido tener previamente instaldo DOCKER y JAVA 17
  
- Validar que en la estructura del proyecto este seteado SDK JAVA 17

  ![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/6e48f2b2-d9d9-4b1c-ba05-d7129b477b64)

2. Debemos crear las imagenes de docker mediante maven
  
   a. Se debe correr el comando de mvn clean install a todos los microservicios comenzando por los de infraestructura y luego los de negocio.

    b. Tambien mediante las tareas de maven que nos proporciona Intellij IDEA, CLEAN -> COMPILE -> INSTALL
   
   ![n3](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/357ee2ab-7bf5-4689-9351-303f8e319f61)
   
   c. Esto ira generando las imagenes de docker, se debe realizar solo una vez por cada microservicio.

3. Inicia los componentes de infraestructura y negocio (Spring Admin, Eureka Discovery, Spring Config, customer, product ,transaction) utilizando Docker Compose en modo daemon (background) con el siguiente comando:
   
#### Comandos docker de utilidad:

Una vez realizado el proceso de maven en los 6 microservicios, se debera abrir una terminal en la path donde se encuentra el docker-compose, "..\Chaco Devs Team-Proyecto Integrador\ChacoDevsTeam_ProyectoIntegradorCuartoSemestre\ECOMMERCE PatitasPetshop\patitaspetshopparent>" y ejecutar el siguiente comando

1- Iniciar los contenedores dockerizados:

docker-compose up -d

Donde se iran iniciando cada microservicio en el orden determinado para que primero se levanten los de infraestructura y por ultimo los de negocio.

Cuando veamos en el log de consola que se registraron en Eureka los mcs de negocio, esto nos indicara que ya estan operativos para su uso.

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/1c5332bf-61a9-4c29-b504-1776a720b05e)

bd-transactions | 2023-11-04T04:47:41.783Z  INFO 1 --- [nfoReplicator-0] com.netflix.discovery.DiscoveryClient    : DiscoveryClient_BUSINESSDOMAIN-TRANSACTION/f9b7cd47c6eb:businessdomain-transaction:8082 - registration status: 204
id-eureka           | 2023-11-04T04:47:42.331Z  INFO 1 --- [nio-8761-exec-3] c.n.e.registry.AbstractInstanceRegistry  : Registered instance BUSINESSDOMAIN-TRANSACTION/f9b7cd47c6eb:businessdomain-transaction:8082 with status UP (replication=true)

2- En caso de realizar alguna modificacion de codigo o propiedades a algun microservicio se debera ejecutar el comando: 

docker-compose up -d --force-recreate

3- Si necesita detener los contenedores: docker-compose stop

4- Si necesita eliminar los volumenes: docker-compose rm (Tener cuidado con el siguiente comando al eliminar un volumen puede perder la base de postgresql)

Recuerda configurar adecuadamente las propiedades de cada microservicio en el docker-compose para garantizar su correcto funcionamiento (Development/Production), tan solo cambiando un valor a una variable :

-Dspring.profiles.active=production 

-Dspring.profiles.active=development

Como cada microservicio es independiente tenemos la chance de estar trabajando algunos en modo productivo o en modo desarrollo.

En este caso el microservicio de transacciones estara en un ambiente productivo, implica el uso de la configuracion de base de datos de MySQL

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/7251066a-93aa-4281-b340-4be389d862c8)

En este caso el microservicio de clientes estara en un ambiente de desarrollo, implica el uso de la configuracion de base de datos en memoria H2

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/7e542a83-c6c8-4972-a75f-d6718874237e)



