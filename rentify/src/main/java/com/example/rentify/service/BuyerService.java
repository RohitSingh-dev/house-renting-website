package com.example.rentify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rentify.entity.Buyer;
import com.example.rentify.model.BuyerResponse;
import com.example.rentify.repository.BuyerRepository;

@Service
public class BuyerService {
    
    @Autowired
    private BuyerRepository buyerRepository;

    public BuyerResponse getBuyer(int id){
        Buyer buyer = buyerRepository.findById(id).orElseThrow(()-> new RuntimeException("Buyer Not Found"));
        BuyerResponse buyerResponse = new BuyerResponse(buyer.getFirstname(), buyer.getLastname(), buyer.getEmail(), buyer.getPhone());
        return buyerResponse;
    }

    public BuyerResponse updateBuyer(Buyer buyer){
        Buyer existingBuyer = buyerRepository.findById(buyer.getId()).orElseThrow(()-> new RuntimeException("Buyer Not Found"));
        existingBuyer.setFirstname(buyer.getFirstname());
        existingBuyer.setLastname(buyer.getLastname());
        existingBuyer.setPhone(buyer.getPhone());
        buyerRepository.save(existingBuyer);
        BuyerResponse buyerResponse = new BuyerResponse(existingBuyer.getFirstname(), existingBuyer.getLastname(), existingBuyer.getEmail(), existingBuyer.getPhone());
        return buyerResponse;
    }

    public String deleteBuyer(int id){
        buyerRepository.deleteById(id);
        return "Buyer Deleted Successfully";
    }
}
