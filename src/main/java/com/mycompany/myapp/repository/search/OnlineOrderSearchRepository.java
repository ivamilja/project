package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.OnlineOrder;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the OnlineOrder entity.
 */
public interface OnlineOrderSearchRepository extends ElasticsearchRepository<OnlineOrder, Long> {
}
