package com.example.rentify.service;

import java.util.List;

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
        return propertyRepository.findById(id).orElseThrow(()-> new RuntimeException("Property Not Found"));
    }

    public Property updateProperty(Property property){
        Property existingProperty = propertyRepository.findById(property.getId()).orElseThrow(()-> new RuntimeException("Property Not Found"));
        existingProperty.setLocation(property.getLocation());
        existingProperty.setArea(property.getArea());
        existingProperty.setLandmark(property.getLandmark());
        existingProperty.setBedroomNum(property.getBedroomNum());
        existingProperty.setBathroomNum(property.getBathroomNum());
        return existingProperty;
    }

    public String deleteProperty(int id){
        propertyRepository.deleteById(id);
        return "Property Deleted Successfully";
    }

    public List<Property> getPropertiesByLocation(String location){
        return propertyRepository.findByLocation(location);
    }

    public List<Property> getPropertiesByArea(String area){
        return propertyRepository.findByArea(area);
    }

    public List<Property> getPropertiesByBedroomNum(int num){
        return propertyRepository.findByBedroomNum(num);
    }

    public List<Property> getPropertiesByBathroomNum(int num){
        return propertyRepository.findByBathroomNum(num);
    }
    
    public List<Property> getPropertiesBySeller(int id){
        return propertyRepository.findBySeller_Id(id);
    }
}
