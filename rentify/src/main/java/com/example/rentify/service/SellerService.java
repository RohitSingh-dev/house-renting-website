package com.example.rentify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rentify.entity.Seller;
import com.example.rentify.repository.SellerRepository;

@Service
public class SellerService {
    
    @Autowired
    private SellerRepository sellerRepository;

    public Seller getSeller(int id){
        return sellerRepository.findById(id).orElseThrow(()-> new RuntimeException("Seller Not Found"));
    }

    public Seller updateSeller(Seller seller){
        Seller existingSeller = sellerRepository.findById(seller.getId()).orElseThrow(()-> new RuntimeException("Seller Not Found"));
        existingSeller.setFirstname(seller.getFirstname());
        existingSeller.setLastname(seller.getLastname());
        existingSeller.setPhone(seller.getPhone());
        return existingSeller;
    }

    public String deleteSeller(int id){
        sellerRepository.deleteById(id);
        return "Seller Deleted Successfully";
    }
}
