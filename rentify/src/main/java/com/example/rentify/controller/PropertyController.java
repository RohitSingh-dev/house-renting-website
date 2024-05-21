package com.example.rentify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rentify.entity.Property;
import com.example.rentify.service.PropertyService;

@RestController
@RequestMapping("/property")
public class PropertyController {
    
    @Autowired
    private PropertyService propertyService;

    @PostMapping()
    public ResponseEntity<String> createProperty(@RequestBody Property property){
        return ResponseEntity.status(201).body(propertyService.createProperty(property));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Property> getProperty(@PathVariable int id){
        return ResponseEntity.ok().body(propertyService.getProperty(id));
    }

    @PutMapping()
    public ResponseEntity<Property> updateProperty(@RequestBody Property property){
        return ResponseEntity.ok().body(propertyService.updateProperty(property));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProperty(@PathVariable int id){
        return ResponseEntity.status(204).body(propertyService.deleteProperty(id));
    }
}
