package com.example.rentify.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.rentify.entity.Seller;

public interface SellerRepository extends CrudRepository<Seller, Integer>{
    
}
