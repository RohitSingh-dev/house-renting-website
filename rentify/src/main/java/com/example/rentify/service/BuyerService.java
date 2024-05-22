package com.example.rentify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rentify.entity.Buyer;
import com.example.rentify.repository.BuyerRepository;

@Service
public class BuyerService {
    
    @Autowired
    private BuyerRepository buyerRepository;

    public Buyer getBuyer(int id){
        return buyerRepository.findById(id).orElseThrow(()-> new RuntimeException("Buyer Not Found"));
    }

    public Buyer updateBuyer(Buyer buyer){
        Buyer existingBuyer = buyerRepository.findById(buyer.getId()).orElseThrow(()-> new RuntimeException("Buyer Not Found"));
        existingBuyer.setFirstname(buyer.getFirstname());
        existingBuyer.setLastname(buyer.getLastname());
        existingBuyer.setPhone(buyer.getPhone());
        return existingBuyer;
    }

    public String deleteBuyer(int id){
        buyerRepository.deleteById(id);
        return "Buyer Deleted Successfully";
    }
}
