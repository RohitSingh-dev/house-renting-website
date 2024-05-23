package com.example.rentify.controller;

import java.util.List;

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

    @GetMapping("/all")
    public ResponseEntity<List<Property>> getAllProperties(){
        return ResponseEntity.ok().body(propertyService.getAllProperties());
    }

    @PutMapping()
    public ResponseEntity<Property> updateProperty(@RequestBody Property property){
        return ResponseEntity.ok().body(propertyService.updateProperty(property));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProperty(@PathVariable int id){
        return ResponseEntity.status(204).body(propertyService.deleteProperty(id));
    }

    @GetMapping("/seller/{id}")
    public ResponseEntity<List<Property>> getPropertiesBySeller(@PathVariable int id){
        return ResponseEntity.ok().body(propertyService.getPropertiesBySeller(id));
    }

    @GetMapping("/location/{location}")
    public ResponseEntity<List<Property>> getPropertiesByLocation(@PathVariable String location){
        return ResponseEntity.ok().body(propertyService.getPropertiesByLocation(location));
    }

    @GetMapping("/area/{area}")
    public ResponseEntity<List<Property>> getPropertiesByArea(@PathVariable String area){
        return ResponseEntity.ok().body(propertyService.getPropertiesByArea(area));
    }

    @GetMapping("/bedroom/{bedroomNum}")
    public ResponseEntity<List<Property>> getPropertiesByBedroomNum(@PathVariable int bedroomNum){
        return ResponseEntity.ok().body(propertyService.getPropertiesByBedroomNum(bedroomNum));
    }

    @GetMapping("/bathroom/{bathroomNum}")
    public ResponseEntity<List<Property>> getPropertiesByBathroomNum(@PathVariable int bathroomNum){
        return ResponseEntity.ok().body(propertyService.getPropertiesByBathroomNum(bathroomNum));
    }
}