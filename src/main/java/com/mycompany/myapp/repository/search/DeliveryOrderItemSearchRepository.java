package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.DeliveryOrderItem;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the DeliveryOrderItem entity.
 */
public interface DeliveryOrderItemSearchRepository extends ElasticsearchRepository<DeliveryOrderItem, Long> {
}
