package com.example.rentify.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.rentify.entity.Property;

@Repository
public interface PropertyRepository extends CrudRepository<Property, Integer>{
    
}
