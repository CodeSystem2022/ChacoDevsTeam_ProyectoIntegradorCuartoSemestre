package com.utntecnicatura.transaction.mcsClients;

import com.fasterxml.jackson.databind.JsonNode;
import com.utntecnicatura.transaction.entities.Transaction;
import com.utntecnicatura.transaction.exception.BusinessRuleException;
import com.utntecnicatura.transaction.service.ImplTransactionService;
import io.netty.channel.ChannelOption;
import io.netty.channel.epoll.EpollChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Mono;
import reactor.netty.http.client.HttpClient;

import java.net.UnknownHostException;
import java.time.Duration;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;
@Component
public class MicroserviceClients {
    private static final String CUSTOMER_CONNECTION="http://businessdomain-costumer/customer";
    private static final String PRODUCT_CONNECTION="http://businessdomain-product/product";
    private static final Logger logger = LoggerFactory.getLogger(ImplTransactionService.class);
    private final WebClient.Builder webClientBuilder;
    public MicroserviceClients(WebClient.Builder webClientBuilder) {
        this.webClientBuilder = webClientBuilder;
    }
    HttpClient client = HttpClient.create()
            //Connection Timeout: is a period within which a connection between a client and a server must be established
            .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 5000)
            .option(ChannelOption.SO_KEEPALIVE, true)
            .option(EpollChannelOption.TCP_KEEPIDLE, 300)
            .option(EpollChannelOption.TCP_KEEPINTVL, 60)
            //response timeout: the maximun time we wait to receive a response after sending a request
            //period of time, while the write timeout when a write operation cannot finish at a specific time
            .responseTimeout(Duration.ofSeconds(1))
            .doOnConnected(connection -> {
                connection.addHandlerLast(new ReadTimeoutHandler(5000, TimeUnit.MILLISECONDS));
                connection.addHandlerLast(new WriteTimeoutHandler(5000, TimeUnit.MILLISECONDS));
            });


    public JsonNode getClienteConnection(long id) throws UnknownHostException {
        try {
            WebClient build = webClientBuilder.clientConnector(new ReactorClientHttpConnector(client))
                    .baseUrl(CUSTOMER_CONNECTION+"/buscarId")
                    .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .defaultUriVariables(Collections.singletonMap("url",  CUSTOMER_CONNECTION+"/buscarId"))
                    .build();
            JsonNode block = build.method(HttpMethod.GET).uri("/" + id)
                    .retrieve().bodyToMono(JsonNode.class).block();
            return block;
        } catch (WebClientResponseException e) {
            HttpStatus statusCode = (HttpStatus) e.getStatusCode();
            logger.info("MCS Costumer connection status: "+statusCode);
            if (e.getStatusCode() == HttpStatus.NOT_FOUND) {
                return null;
            } else {
                throw new UnknownHostException(e.getMessage());
            }
        }
    }

    public JsonNode getProductConnection(Long id) throws UnknownHostException {
        try {
            WebClient build = webClientBuilder.clientConnector(new ReactorClientHttpConnector(client))
                    .baseUrl(PRODUCT_CONNECTION+"/obtenerProducto")
                    .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .defaultUriVariables(Collections.singletonMap("url",  PRODUCT_CONNECTION+"/obtenerProducto"))
                    .build();
            JsonNode block = build.method(HttpMethod.GET).uri("/" + id)
                    .retrieve().bodyToMono(JsonNode.class).block();
            return block;
        } catch (WebClientResponseException e) {
            HttpStatus statusCode = (HttpStatus) e.getStatusCode();
            logger.info("MCS Product connection status: "+statusCode);
            if (e.getStatusCode() == HttpStatus.NOT_FOUND) {
                return null;
            } else {
                throw new UnknownHostException(e.getMessage());
            }
        }
    }
    public JsonNode updateStockProductConnection(String id,String cantidad) throws UnknownHostException {
        try {
            MultiValueMap<String, String> bodyValues = new LinkedMultiValueMap<>();
            bodyValues.add("productId", id);
            bodyValues.add("quantity",cantidad);

            WebClient build = webClientBuilder.clientConnector(new ReactorClientHttpConnector(client))
                    .baseUrl(PRODUCT_CONNECTION+"/actualizarStockProducto")
                    .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .defaultUriVariables(Collections.singletonMap("url",  PRODUCT_CONNECTION+"/actualizarStockProducto"))
                    .build();

            JsonNode block = build.method(HttpMethod.POST)
                    .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                    .body(BodyInserters.fromFormData(bodyValues))
                    .retrieve()
                    .bodyToMono(JsonNode.class)
                    .block();

            return block;
        } catch (WebClientResponseException e) {
            HttpStatus statusCode = (HttpStatus) e.getStatusCode();
            logger.info("MCS Product connection status: "+statusCode);
            if (e.getStatusCode() == HttpStatus.NOT_FOUND) {
                return null;
            } else {
                throw new UnknownHostException(e.getMessage());
            }
        }
    }

    public JsonNode getProductByIdAndQuantity(Long id, int quantity) {
        try {
            WebClient webClient = webClientBuilder
                    .baseUrl(PRODUCT_CONNECTION)
                    .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .build();

            // Crear un objeto JSON para la solicitud POST
            Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("id", id);
            requestBody.put("quantity", quantity);

            JsonNode response = webClient
                    .method(HttpMethod.POST)
                    .uri("/actualizarStockProducto")
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(JsonNode.class)
                    .block();
            return response;

        } catch (WebClientResponseException e) {
            if (e.getStatusCode() == HttpStatus.NOT_FOUND) {
                return null;
            } else {
                throw new RuntimeException("Error al realizar la solicitud: " + e.getMessage());
            }
        }
    }

}
