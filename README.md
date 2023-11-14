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

 ![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/030074cc-3e45-4d4d-b358-40b53700e6dc)

 ![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/42a248b4-40a6-4f84-8688-fc232cf26144)

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
- Swagger UI se accede través de la URL [http://localhost:8081/swagger-ui/index.html#/](http://localhost:8081/swagger-ui/index.html#/)

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/186b3a4f-baa8-42f2-a5ef-058abd447bcf)

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/f711c9cd-82b3-4db6-a38c-a5896c35ce4f)

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

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/4f6993f8-f65f-46c6-8d46-f30f7f32d0c8)

### Persistencia de los datos
Mediante la configuracion seteada previamente en el docker-compose.yml podemos optar en dos modos de persistencia de datos dependiendo de la rigurosidad de las pruebas:

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

`docker-compose up -d`

Donde se iran iniciando cada microservicio en el orden determinado para que primero se levanten los de infraestructura y por ultimo los de negocio.

Cuando veamos en el log de consola que se registraron en Eureka los mcs de negocio, esto nos indicara que ya estan operativos para su uso.

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/1c5332bf-61a9-4c29-b504-1776a720b05e)

`bd-transactions | 2023-11-04T04:47:41.783Z  INFO 1 --- [nfoReplicator-0] com.netflix.discovery.DiscoveryClient    : DiscoveryClient_BUSINESSDOMAIN-TRANSACTION/f9b7cd47c6eb:businessdomain-transaction:8082 - registration status: 204`

`id-eureka           | 2023-11-04T04:47:42.331Z  INFO 1 --- [nio-8761-exec-3] c.n.e.registry.AbstractInstanceRegistry  : Registered instance BUSINESSDOMAIN-TRANSACTION/f9b7cd47c6eb:businessdomain-transaction:8082 with status UP (replication=true)`

2- En caso de realizar alguna modificacion de codigo o propiedades a algun microservicio se debera ejecutar el comando: 

`docker-compose up -d --force-recreate`

3- Si necesita detener los contenedores: `docker-compose stop`

4- Si necesita eliminar los volumenes: `docker-compose rm` (Tener cuidado con el siguiente comando al eliminar un volumen puede perder la base de postgresql)

Recuerda configurar adecuadamente las propiedades de cada microservicio en el docker-compose para garantizar su correcto funcionamiento (Development/Production), tan solo cambiando un valor a una variable :

`-Dspring.profiles.active=production` 

`-Dspring.profiles.active=development`

Como cada microservicio es independiente tenemos la chance de estar trabajando algunos en modo productivo o en modo desarrollo.

En este caso el microservicio de transacciones estara en un ambiente productivo, implica el uso de la configuracion de base de datos de MySQL

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/7251066a-93aa-4281-b340-4be389d862c8)

En este caso el microservicio de clientes estara en un ambiente de desarrollo, implica el uso de la configuracion de base de datos en memoria H2

![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/70241433/7e542a83-c6c8-4972-a75f-d6718874237e)

# FRONTEND
![roadmap](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/bfa00700-e8cd-43ba-a979-c9ea883d2d3e)


## Tecnologías Utilizadas

Este proyecto utiliza la biblioteca React para construir una aplicación web relacionada con la venta de productos para mascotas. La aplicación cuenta con diferentes componentes que se encargan de funciones específicas, como la identificación de usuarios, la selección y visualización de productos, el proceso de entrega, y el registro de nuevos usuarios.
Este código representa una aplicación  que se comunica con un servidor a través de solicitudes HTTP utilizando Axios. 

## Inicialización del proyecto:
-Ubicarse en la carpeta ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/ECOMMERCE PatitasPetshop/patitaspetshopfrontend/src y luego ejecutar la terminal.En ella el primer comando a utlizar será npm install,con el lograremos instalar/actualizar todas las dependencias necesarias.
-Luego utilzizaremos el comando npm start,se utiliza para iniciar el servidor de desarrollo. Cuando ejecutas este comando en la terminal, se inicia un servidor local que sirve tu aplicación React y proporciona una URL a la que puedes acceder desde tu navegador. Este servidor de desarrollo facilita la visualización y prueba de tu aplicación durante el desarrollo.
## Consideraciones adicionales

- Asegúrate de tener todas las dependencias instaladas antes de ejecutar la aplicación.
- Para loguarse y poder cargar prodcutos se debe usar el usuario:admin@admin y contraseña: admin
- Algunas imagenes para cargar son:
ALIMENTOS PARA PERROS 

https://d3ugyf2ht6aenh.cloudfront.net/stores/001/426/797/products/dogchow-perros-adultos-controldepeso-21kg1-3e4f17791dec93c69e16099485931801-640-0.png

https://d2kmqq5rew4hrh.cloudfront.net/1741-medium_default/vital-can-complete-ad-raza-med-y-gde-20kg.jpg

https://nutrican.com.ar/wp-content/uploads/2022/09/SIEGER-PUPPY-SMALL.png


🐱ALIMENTOS PARA GATOS

https://www.canrock.com.ar/8310-thickbox_default/cat-chow-gatitos.jpg

https://petshopmardelplata.com.ar/wp-content/uploads/2022/08/7613039947739_1.png

https://mascolandiapets.com/productos/producto-75267831/C7MOSKVe1Smny9JleLR3.png



🐶ACCESORIOS PARA PERRO

https://www.petco.com.mx/medias/?context=bWFzdGVyfGltYWdlc3wzMjIyMjR8aW1hZ2UvZ2lmfGltYWdlcy9oNWQvaDkzLzg5NDAzNjIxNzAzOTguZ2lmfGM2MTFhNTZmYjI2YmYyNmEwYjZlODQ2ZDE5MDc2MTA0ZWI0ODU0MTUyYjAxMzM0YzQzOTI4MjY4YzFmNzYwNWM

https://static-shop.vivapets.com/media/catalog/product/cache/e12a3504b2f0ed30df071ad930a3248d/2/8/2800000726-1.png


🐱ACCESORIOS PARA GATO 

https://www.animal-factor.com/wp-content/uploads/2018/03/COLLAR-GATO-DIJE-ROSADO-1980x1980.png

https://mundoanimalsantafe.com.ar/wp-content/uploads/2022/01/pro-plan-kitten.png

# Carpeta Components
### Documentación del Código

#### 1. **Componente Card (Card.js):**
   - **Descripción:** Este componente representa la estructura visual de una tarjeta de producto.
   - ![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/dab764c1-5c16-4a4c-b880-bc8951258cfe)
   - **Props:**
     - `nombre`: Nombre del producto.
     - `precio`: Precio del producto.
     - `imagen`: URL de la imagen del producto.
   - **Estructura:**
     - Contenedor principal con la clase `.product-card`.
     - Contenedor de título con la clase `.card-title-cont`.
     - Etiqueta `h4` para el nombre del producto.
     - Etiqueta `img` para la imagen del producto.
     - Etiqueta `p` para mostrar el precio.

#### 2. **Componente Cards (Cards.js):**
   - **Descripción:** Este componente representa una colección de tarjetas de productos.
   - ![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/1972a38c-2f5f-4a84-8686-07b7f34504fd)

   - **Props:**
     - `allProducts`: Array de objetos que contiene información sobre todos los productos.
   - **Estructura:**
     - Mapea el array de productos y utiliza el componente `Card` para cada uno.
     - Cada tarjeta está envuelta en un enlace (`Link`) que redirige a la página de detalle del producto.

#### 3. **Componente Carrito (Carrito.js):**
-![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/75cc35ee-28f6-4a25-85e6-d9041820d468)


   - **Descripción:** Gestiona el carrito de compras, opciones de pago y realiza la compra.
   - **Funcionalidades:**
     - Muestra los productos en el carrito.
     - Permite seleccionar el método de pago.
     - Envia la orden de compra al servidor.
   - **Estructura:**
     - Utiliza el contexto del carrito y Redux para obtener y gestionar la información del carrito.
     - Permite al usuario seleccionar entre Mercado Pago, Tarjeta de Crédito/Débito o Efectivo.
     - Al confirmar la compra, redirige al usuario a la página de entrega.

#### 4. **Componente Contador (Contador.js):**
   - **Descripción:** Componente que gestiona la cantidad de productos a agregar al carrito.
   - **Props:**
     - `initial`: Cantidad inicial.
     - `stock`: Stock disponible.
     - `onAdd`: Función para agregar productos al carrito.
   - **Estructura:**
     - Botones para incrementar y decrementar la cantidad.
     - Muestra la cantidad actual y un botón para agregar al carrito.

#### 5. **Componente ListaCarrito (ListaCarrito.js):**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/26f95c09-651e-4d1c-9b46-560ff1d878d9)

   - **Descripción:** Muestra un producto en el carrito con opción para eliminarlo.
   - **Props:**
     - `product`: Objeto con información del producto.
   - **Estructura:**
     - Muestra la imagen, nombre, cantidad, precio unitario y subtotal del producto.
     - Botón para eliminar el producto del carrito.

#### 6. **Componente NavBar (NavBar.js):**
![WhatsApp Image 2023-11-13 at 20 54 25](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/6f02c8b9-8f7a-4ed0-a541-0bc164b12e9d)

   - **Descripción:** Barra de navegación con enlaces a diferentes secciones y opciones de inicio de sesión.
   - **Funcionalidades:**
     - Permite navegar a diversas secciones de la aplicación.
     - Muestra opciones diferentes según si el usuario está o no autenticado.

#### 7. **Componente Perfil (Perfil.js):**
   - **Descripción:** Muestra el historial de compras del usuario.
   - **Funcionalidades:**
     - Obtiene el historial de compras y la información de los productos comprados.
     - Muestra la fecha, monto, medio de pago y productos de cada transacción.
   - **Notas:**
     - Requiere la autenticación del usuario.

#### 8. **Componente SearchBar (SearchBar.js):**
   - **Descripción:** Barra de búsqueda que permite filtrar productos por nombre.
   - **Funcionalidades:**
     - Filtra productos por nombre.
     - Permite mostrar todos los productos.
   - **Notas:**
     - Utiliza Redux para gestionar el estado de los productos filtrados.

#### 9. **Componente Usuario (Usuario.js):**
   - **Descripción:** Muestra opciones de navegación dependiendo del estado de inicio de sesión y el rol del usuario.
   - **Funcionalidades:**
     - Redirige a la página de administración si el usuario es un administrador.
     - Redirige a la página de perfil si el usuario está autenticado.

#### 10. **Estilos y Recursos:**
   - Archivos CSS proporcionan estilos para diferentes componentes.
   - Utiliza imágenes para el logo, carrito y botón de búsqueda.

### Notas Generales:
- Se hace uso de enrutamiento (`react-router-dom`) para la navegación entre páginas.
- La comunicación con el servidor se realiza mediante solicitudes HTTP, utilizando Axios.
- Algunos componentes dependen del contexto (`useCarritoContexto`) para acceder a información global.

# Carpeta Redux:
#### 1.  **Acciones:**

1. **getProducts**
Descripción:
-Realiza una solicitud al servidor para obtener la lista de productos.
-Actualiza el estado global con la información de los productos.

**Uso:**
-Invocado al cargar la aplicación o al necesitar una actualización de productos.
-Se dispara mediante la función dispatch de Redux.

2. **postUser**
Descripción:
-Realiza una solicitud al servidor para registrar un nuevo cliente.

**Uso:**
-Se utiliza cuando se completa un formulario de registro de usuario.
-Avisa al usuario sobre el éxito o fracaso de la operación.

3. **postProducto**
Descripción:
-Realiza una solicitud al servidor para agregar un nuevo producto.

**Uso:**
-Se utiliza al completar un formulario para agregar un nuevo producto.
-Proporciona una alerta indicando el resultado de la operación.

4. **postPago**
Descripción:
-Realiza una solicitud al servidor para registrar una nueva transacción de pago.

**Uso:**
-Se utiliza después de que un usuario confirma la compra.
-Muestra en la consola la información del pago y un mensaje de éxito.

5. **alimentoByNombre**
Descripción:
-Realiza una búsqueda por nombre de producto en el servidor.

-Actualiza el estado global con los productos que coinciden con la búsqueda.
**Uso:**
Se llama cuando el usuario realiza una búsqueda en la barra de búsqueda.
Proporciona una alerta si no se encuentran productos.

#### 2.  **Reducer**
Descripción:
-El reducer maneja las actualizaciones del estado global de la aplicación.
-Contiene un estado inicial con la lista de todos los productos, el carrito de compras y la consulta de búsqueda.
-Se encarga de procesar las acciones y actualizar el estado en consecuencia.
**Acciones Manejadas:**
-GET_PRODUCTS:
Actualiza la lista de todos los productos en el estado global.

#### 3.  **Store**
Descripción:
-La tienda (store) de Redux contiene el estado global de la aplicación.
-Utiliza el middleware redux-thunk para permitir acciones asíncronas.
-Se crea utilizando createStore de Redux y se proporciona el reducer.


# Carpeta Views:

#### 1.  **Accesorios**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/279ba854-5d00-462d-b1ed-39515d756edb)

#### Descripción:
El componente `Accesorios` es una parte de la interfaz de usuario de una aplicación web construida con React. Este componente se encarga de mostrar y filtrar una lista de productos considerados como "accesorios". Además, proporciona funcionalidades para filtrar los productos por precio y nombre.

#### Estructura del Código:

1. **Importaciones:**
   - `React`: Biblioteca principal de React.
   - `useEffect` y `useState`: Hooks de React para manejar efectos secundarios y el estado del componente.
   - `useSelector` y `useDispatch`: Hooks de React Redux para acceder al estado global y despachar acciones.
   - `getProducts`: Acción importada desde el archivo de acciones para obtener la lista de productos.
   - `Accesorios.css`: Archivo de estilos específico para el componente.
   - `Cards`: Componente de tarjetas utilizado para mostrar los productos.

2. **Estado Local:**
   - `precioMin`, `precioMax`, `nombre`: Estados locales para manejar los filtros de precio y nombre.

3. **Efectos y Acciones:**
   - `useEffect`: Se utiliza para llamar a la acción `getProducts` al cargar el componente, obteniendo así la lista de productos.
   - `dispatch`: Se utiliza para despachar la acción `getProducts`.

4. **Filtrado de Productos:**
   - Se filtran los productos según su tipo (`ACCESORIO`) y dentro de un rango de precio especificado.
   - La función de filtro también tiene en cuenta el nombre del producto para realizar búsquedas.

5. **Manejo de Cambios en Filtros:**
   - `handleFilterChange`: Función para manejar cambios en los filtros de precio y nombre.

6. **Restablecimiento de Filtros:**
   - `resetFilters`: Función para restablecer los filtros a sus valores iniciales.

7. **Renderización de la Interfaz:**
   - Se presenta una sección de filtros con campos para precio mínimo, precio máximo y búsqueda por nombre.
   - Botón para restablecer los filtros.
   - Se muestra un mensaje si no hay productos disponibles, de lo contrario, se utilizan las tarjetas del componente `Cards` para mostrar los productos filtrados.

---

#### 2.  **Admin**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/0d37e253-df45-474a-b077-3b9b98354860)


#### Descripción:
El componente `Admin` representa el panel de administración de la aplicación. Proporciona opciones de navegación y un botón para cerrar sesión.

#### Estructura del Código:

1. **Importaciones:**
   - `React`: Biblioteca principal de React.
   - `Link` y `useHistory`: Utilizados para la navegación entre páginas.
   - `Admin.css`: Archivo de estilos específico para el componente.

2. **Funcionalidades:**
   - `handleLogout`: Función que realiza tareas de cierre de sesión al hacer clic en el botón "Cerrar Sesión".

3. **Interfaz de Usuario:**
   - Encabezado indicando "Panel de Administración".
   - Lista de opciones de navegación: "Ver Transacciones", "Gestionar Productos", "Ver todos los productos".
   - Botón "Cerrar Sesión" para salir del panel de administración.

---

#### 3.  **Detail**
-![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/13cda95f-ce2d-4288-be14-7f0ee038a296)


#### Descripción:
El componente `Detail` se encarga de mostrar los detalles de un producto seleccionado. Permite al usuario agregar el producto al carrito de compras.

#### Estructura del Código:

1. **Importaciones:**
   - `React`: Biblioteca principal de React.
   - `useEffect`, `useState`: Hooks de React para manejar efectos secundarios y el estado del componente.
   - `axios`: Biblioteca para realizar solicitudes HTTP.
   - `useParams`: Hook de React Router para acceder a los parámetros de la URL.
   - `Contador`: Componente utilizado para gestionar la cantidad de productos a agregar al carrito.
   - `Link`: Componente utilizado para la navegación entre páginas.
   - `useCarritoContexto`: Hook personalizado para acceder al contexto del carrito.

2. **Estado Local:**
   - `producto`: Estado local para almacenar los detalles del producto seleccionado.
   - `goCart`: Estado local para gestionar la navegación al carrito.

3. **Efectos y Funciones:**
   - `useEffect`: Se utiliza para obtener los detalles del producto seleccionado al cargar el componente.
   - `onAdd`: Función que se ejecuta al agregar productos al carrito, actualizando el estado `goCart`.

4. **Interfaz de Usuario:**
   - Se muestran detalles como el nombre, precio e imagen del producto.
   - Se presenta un componente `Contador` para seleccionar la cantidad de productos a agregar al carrito.
   - Dependiendo del estado `goCart`, se muestra un enlace para finalizar la compra o el contador para agregar al carrito.

---

#### 4.  **Control**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/5b114b1a-e410-49bf-9491-2d7203cf305e)

#### Descripción:
El componente `Control` se encarga de registrar nuevos productos en la aplicación. Proporciona un formulario para ingresar los detalles del producto.

#### Estructura del Código:

1. **Importaciones:**
   - `React`: Biblioteca principal de React.
   - `postProducto`: Acción importada desde el archivo de acciones para agregar un nuevo producto.
   - `useDispatch` y `useHistory`: Hooks de React Redux para despachar acciones y para la navegación entre páginas.

2. **Estado Local:**
   - `newProduct`: Estado local para almacenar los detalles del nuevo producto.
   - `productos`: Estado local para almacenar la lista actual de productos.

3. **Efectos y Funciones:**
   - `useEffect`: Se utiliza para cargar la lista de productos al montar el componente.
   - `handleChange`: Función para manejar cambios en los campos del formulario.
   - `handleSubmit`: Función para enviar la solicitud de registro del nuevo producto.
   - `handleGoBack`: Función para volver atrás en la navegación.

4. **Interfaz de Usuario:**
   - Formulario con campos para ingresar el código, nombre, precio, tipo, especie, stock e imagen del nuevo producto.
   - Botones para registrar el producto y volver atrás.
   - 

#### 5.  **Entrega**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/cabf69dc-fc59-49bb-9b87-9b620cbb9ee9)

#### Descripción:
Este componente maneja la selección de opciones de entrega, como el retiro en la sucursal más cercana o la entrega a domicilio. También permite ingresar la dirección de entrega en caso de elegir la opción de entrega a domicilio.

#### Uso:
Se utiliza para recopilar la información necesaria para la entrega de productos.


#### 6.  **Form**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/3c886a82-7918-434c-ba8d-1eae2fbfeb6d)

#### Descripción:
Este componente se encarga del formulario de registro de nuevos usuarios. Incluye validaciones en tiempo real para asegurar que se ingresen datos válidos.

#### Uso:
Se utiliza para que los usuarios puedan registrarse en la plataforma.



#### 7.  **FullProductos**

#### Descripción:
Este componente muestra una lista completa de productos disponibles. Permite añadir productos al carrito de compras.

#### Uso:
Se utiliza para visualizar y seleccionar productos.


#### 8.  **Gatos**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/cbc22041-779d-497f-81aa-4252a2b8542e)

#### Descripción:
Este componente filtra y muestra productos específicos para gatos según criterios como precio, tipo, y marca.

#### Uso:
Se utiliza para mostrar una selección específica de productos para gatos.



#### 9.  **Home**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/07ea186a-f3d5-4b09-92ce-dde2b8def093)

#### Descripción:
Este componente representa la página de inicio con un carrusel de imágenes, enlaces a categorías de productos y ofertas especiales.

#### Uso:
Se utiliza como la página principal de la aplicación.


#### 10.  **Identificacion**

#### Descripción:
Este componente recopila la información esencial del usuario para la finalización de la compra.

#### Uso:
Se utiliza para identificar al usuario antes de completar la compra.



#### 11.  **Login**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/080b2a35-b4f8-4f89-bb04-c2375367c416)

#### Descripción:
Este componente permite a los usuarios iniciar sesión, verifica la existencia del correo electrónico y redirige a la página de inicio o al perfil del usuario.

#### Uso:
Se utiliza para que los usuarios puedan acceder a sus cuentas.



#### 12.  **Pagos**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/e601b865-8969-4198-a355-7fcb0e390375)

#### Descripción:
El componente `Pagos` es responsable de gestionar las opciones de pago y realizar la confirmación de la compra.

#### Estado:
- `opcionPago`: Almacena la opción de pago seleccionada por el usuario.
- `datosTarjeta`: Almacena los datos de la tarjeta cuando se elige el pago con tarjeta.
- `mensaje`: Almacena mensajes de éxito o error.

#### Funciones Principales:
- `handleOptionChange`: Maneja el cambio en la opción de pago.
- `handlePagar`: Realiza la lógica de pago y muestra mensajes de confirmación o error.

#### Estructura del Renderizado:
- Muestra formularios condicionales dependiendo de la opción de pago seleccionada.


### 13.  **Perros**

#### Descripción:
El componente `Perros` muestra productos relacionados con perros, con opciones de filtrado por precio, tipo y marca.

#### Estado:
- `precioMin`, `precioMax`: Define el rango de precios a filtrar.
- `tipo`: Almacena el tipo de producto seleccionado para filtrar.
- `marca`: Almacena la marca seleccionada para filtrar.

#### Funciones Principales:
- `handleFilterChange`: Maneja los cambios en los filtros.
- `resetFilters`: Restablece los filtros a sus valores iniciales.

#### Estructura del Renderizado:
- Muestra productos filtrados o un mensaje si no hay productos disponibles.


#### 14. **Transacciones:**
![image](https://github.com/CodeSystem2022/ChacoDevsTeam_ProyectoIntegradorCuartoSemestre/assets/112787278/8c25cc4f-33fb-4334-bd40-c4578af51feb)

#### Descripción:
El componente `Transacciones` muestra información sobre las transacciones realizadas, incluyendo detalles del cliente y productos.

#### Estado:
- `transacciones`: Almacena la lista de transacciones.
- `clienteInfo`: Almacena información del cliente para cada transacción.
- `productoInfo`: Almacena información del producto para cada transacción.

#### Funciones Principales:
- `listarTransacciones`: Obtiene y actualiza la lista de transacciones.
- `obtenerInformacionProducto`: Obtiene información del producto por su ID.
- `obtenerInformacionCliente`: Obtiene información del cliente por su ID.
- `volverAAdmin`: Redirige a la página de administración.

#### Estructura del Renderizado:
- Muestra detalles de cada transacción, cliente y productos asociados.












