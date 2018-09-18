package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.DeliveryOrderItem;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the DeliveryOrderItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DeliveryOrderItemRepository extends JpaRepository<DeliveryOrderItem, Long> {

}
