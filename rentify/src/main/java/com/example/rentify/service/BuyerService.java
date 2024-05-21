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
        return buyerRepository.findById(id).get();
    }

    public Buyer updateBuyer(Buyer buyer){
        Buyer existingBuyer = buyerRepository.findById(buyer.getId()).get();
        existingBuyer.setFirst_name(buyer.getFirst_name());
        existingBuyer.setLast_name(buyer.getLast_name());
        existingBuyer.setPhone(buyer.getPhone());
        return existingBuyer;
    }

    public String deleteBuyer(int id){
        buyerRepository.deleteById(id);
        return "Buyer Deleted Successfully";
    }
}
