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
        return sellerRepository.findById(id).get();
    }

    public Seller updateSeller(Seller seller){
        Seller existingSeller = sellerRepository.findById(seller.getId()).get();
        existingSeller.setFirst_name(seller.getFirst_name());
        existingSeller.setLast_name(seller.getLast_name());
        existingSeller.setPhone(seller.getPhone());
        return existingSeller;
    }

    public String deleteSeller(int id){
        sellerRepository.deleteById(id);
        return "Seller Deleted Successfully";
    }
}
