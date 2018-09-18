package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.DeliveryOrder;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the DeliveryOrder entity.
 */
public interface DeliveryOrderSearchRepository extends ElasticsearchRepository<DeliveryOrder, Long> {
}
