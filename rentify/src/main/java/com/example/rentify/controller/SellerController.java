package com.example.rentify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rentify.entity.Seller;
import com.example.rentify.service.SellerService;

@RestController
@RequestMapping("/seller")
public class SellerController {
    
    @Autowired
    private SellerService sellerService;

    @GetMapping("/{id}")
    public ResponseEntity<Seller> getSeller(@PathVariable int id){
        return ResponseEntity.ok().body(sellerService.getSeller(id));
    }

    @PutMapping()
    public ResponseEntity<Seller> updateSeller(@RequestBody Seller seller){
        return ResponseEntity.ok().body(sellerService.updateSeller(seller));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSeller(@PathVariable int id){
        return ResponseEntity.status(204).body(sellerService.deleteSeller(id));
    }
}
