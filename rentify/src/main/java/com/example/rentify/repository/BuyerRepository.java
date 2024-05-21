package com.example.rentify.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.rentify.entity.Buyer;

@Repository
public interface BuyerRepository extends CrudRepository<Buyer, Integer>{
    
}
