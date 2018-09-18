package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.OnlineOrderItem;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the OnlineOrderItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OnlineOrderItemRepository extends JpaRepository<OnlineOrderItem, Long> {

}
