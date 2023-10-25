package com.utntecnicatura.customer.component;

import com.utntecnicatura.customer.entities.Customer;
import com.utntecnicatura.customer.exception.BusinessRuleException;
import com.utntecnicatura.customer.repository.CustomerRepository;
import com.utntecnicatura.customer.service.CostumerServiceImpl;
import jakarta.transaction.Transactional;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class DatosIniciales implements ApplicationListener<ContextRefreshedEvent> {

    private final CostumerServiceImpl customerService;

    public DatosIniciales(CostumerServiceImpl customerService) {
        this.customerService = customerService;
    }

    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
        // Verificar si ya existe un cliente con el nombre de usuario "admin"
        try {
            Customer admin = customerService.getByNombre("admin");
        } catch (BusinessRuleException e) {
            Customer admin = new Customer();
            admin.setNombre("admin");
            admin.setEmail("admin@admin");
            admin.setContraseña("123456");
            customerService.post(admin);
        }
    }
}
