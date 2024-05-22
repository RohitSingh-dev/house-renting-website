package com.example.rentify.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.rentify.entity.Seller;

@Repository
public interface SellerRepository extends CrudRepository<Seller, Integer>{
    
    public Seller findByEmail(String email);
}
