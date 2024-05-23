package com.example.rentify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rentify.entity.Seller;
import com.example.rentify.model.SellerResponse;
import com.example.rentify.repository.SellerRepository;

@Service
public class SellerService {
    
    @Autowired
    private SellerRepository sellerRepository;

    public SellerResponse getSeller(int id){
        Seller seller = sellerRepository.findById(id).orElseThrow(()-> new RuntimeException("Seller Not Found"));
        SellerResponse sellerResponse= new SellerResponse(seller.getFirstname(), seller.getLastname(), seller.getEmail(), seller.getPhone());
        return sellerResponse;
    }

    public SellerResponse updateSeller(Seller seller){
        Seller existingSeller = sellerRepository.findById(seller.getId()).orElseThrow(()-> new RuntimeException("Seller Not Found"));
        existingSeller.setFirstname(seller.getFirstname());
        existingSeller.setLastname(seller.getLastname());
        existingSeller.setPhone(seller.getPhone());
        SellerResponse sellerResponse = new SellerResponse(existingSeller.getFirstname(), existingSeller.getLastname(), existingSeller.getEmail(), existingSeller.getPhone());
        return sellerResponse;
    }

    public String deleteSeller(int id){
        sellerRepository.deleteById(id);
        return "Seller Deleted Successfully";
    }
}
