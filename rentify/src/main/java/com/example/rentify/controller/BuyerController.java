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

import com.example.rentify.entity.Buyer;
import com.example.rentify.service.BuyerService;

@RestController
@RequestMapping("/buyer")
public class BuyerController {

    @Autowired
    private BuyerService buyerService;
    
    @GetMapping("/{id}")
    public ResponseEntity<Buyer> getBuyer(@PathVariable int id){
        return ResponseEntity.ok().body(buyerService.getBuyer(id));
    }

    @PutMapping()
    public ResponseEntity<Buyer> updateBuyer(@RequestBody Buyer buyer){
        return ResponseEntity.ok().body(buyerService.updateBuyer(buyer));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBuyer(@PathVariable int id){
        return ResponseEntity.status(204).body(buyerService.deleteBuyer(id));
    }
}
