package com.example.rentify.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.rentify.entity.Buyer;

public interface BuyerRepository extends CrudRepository<Buyer, Integer>{
    
}
