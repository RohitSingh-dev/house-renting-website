package com.example.rentify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rentify.entity.Property;
import com.example.rentify.repository.PropertyRepository;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public String createProperty(Property property){
        propertyRepository.save(property);
        return "Property Uploaded Successfully";
    }

    public Property getProperty(int id){
        return propertyRepository.findById(id).get();
    }

    public Property updateProperty(Property property){
        Property existingProperty = propertyRepository.findById(property.getId()).get();
        existingProperty.setLocation(property.getLocation());
        existingProperty.setArea(property.getArea());
        existingProperty.setLandmark(property.getLandmark());
        existingProperty.setNo_of_bed(property.getNo_of_bed());
        existingProperty.setNo_of_bath(property.getNo_of_bath());
        return existingProperty;
    }

    public String deleteProperty(int id){
        propertyRepository.deleteById(id);
        return "Propert Deleted Successfully";
    }
    
}
