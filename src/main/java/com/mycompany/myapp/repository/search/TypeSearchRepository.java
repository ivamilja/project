package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Type;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Type entity.
 */
public interface TypeSearchRepository extends ElasticsearchRepository<Type, Long> {
}
