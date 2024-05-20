package com.example.rentify.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.rentify.entity.Property;

public interface PropertyRepository extends CrudRepository<Property, Integer>{
    
}
