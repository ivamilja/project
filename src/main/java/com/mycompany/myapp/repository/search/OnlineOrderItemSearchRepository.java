package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.OnlineOrderItem;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the OnlineOrderItem entity.
 */
public interface OnlineOrderItemSearchRepository extends ElasticsearchRepository<OnlineOrderItem, Long> {
}
