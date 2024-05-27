package com.example.rentify.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rentify.entity.Property;
import com.example.rentify.model.PropertyResponse;
import com.example.rentify.model.SellerResponse;
import com.example.rentify.repository.PropertyRepository;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public String createProperty(Property property){
        propertyRepository.save(property);
        return "Property Uploaded Successfully";
    }

    public PropertyResponse getProperty(int id){
        Property property= propertyRepository.findById(id).orElseThrow(()-> new RuntimeException("Property Not Found"));
        PropertyResponse propertyResponse = new PropertyResponse();
        propertyResponse.setLocation(property.getLocation());
        propertyResponse.setArea(property.getArea());
        propertyResponse.setBedroomNum(property.getBedroomNum());
        propertyResponse.setBathroomNum(property.getBathroomNum());
        propertyResponse.setLandmark(property.getLandmark());
        SellerResponse sellerResponse = new SellerResponse(property.getSeller().getFirstname(), property.getSeller().getLastname(), property.getSeller().getEmail(), property.getSeller().getPhone());
        propertyResponse.setSellerResponse(sellerResponse);
        return propertyResponse;
    }

    public List<PropertyResponse> getAllProperties(){
        List<Property> properties=  (List<Property>) propertyRepository.findAll();
        List<PropertyResponse> propertyResponses = new ArrayList<>();
        for(Property property : properties){
            PropertyResponse propertyResponse = new PropertyResponse();
            propertyResponse.setLocation(property.getLocation());
            propertyResponse.setArea(property.getArea());
            propertyResponse.setBedroomNum(property.getBedroomNum());
            propertyResponse.setBathroomNum(property.getBathroomNum());
            propertyResponse.setLandmark(property.getLandmark());
            SellerResponse sellerResponse = new SellerResponse(property.getSeller().getFirstname(), property.getSeller().getLastname(), property.getSeller().getEmail(), property.getSeller().getPhone());
            propertyResponse.setSellerResponse(sellerResponse);
            propertyResponses.add(propertyResponse);
        }
        return propertyResponses;
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

    public List<PropertyResponse> getPropertiesByLocation(String location){
        List<Property> properties = propertyRepository.findByLocation(location);
        List<PropertyResponse> propertyResponses = new ArrayList<>();
        for(Property property : properties){
            PropertyResponse propertyResponse = new PropertyResponse();
            propertyResponse.setLocation(property.getLocation());
            propertyResponse.setArea(property.getArea());
            propertyResponse.setBedroomNum(property.getBedroomNum());
            propertyResponse.setBathroomNum(property.getBathroomNum());
            propertyResponse.setLandmark(property.getLandmark());
            SellerResponse sellerResponse = new SellerResponse(property.getSeller().getFirstname(), property.getSeller().getLastname(), property.getSeller().getEmail(), property.getSeller().getPhone());
            propertyResponse.setSellerResponse(sellerResponse);
            propertyResponses.add(propertyResponse);
        }
        return propertyResponses;
    }

    public List<PropertyResponse> getPropertiesByArea(String area){
        List<Property> properties = propertyRepository.findByArea(area);
        List<PropertyResponse> propertyResponses = new ArrayList<>();
        for(Property property : properties){
            PropertyResponse propertyResponse = new PropertyResponse();
            propertyResponse.setLocation(property.getLocation());
            propertyResponse.setArea(property.getArea());
            propertyResponse.setBedroomNum(property.getBedroomNum());
            propertyResponse.setBathroomNum(property.getBathroomNum());
            propertyResponse.setLandmark(property.getLandmark());
            SellerResponse sellerResponse = new SellerResponse(property.getSeller().getFirstname(), property.getSeller().getLastname(), property.getSeller().getEmail(), property.getSeller().getPhone());
            propertyResponse.setSellerResponse(sellerResponse);
            propertyResponses.add(propertyResponse);
        }
        return propertyResponses;
    }

    public List<PropertyResponse> getPropertiesByBedroomNum(int num){
        List<Property> properties = propertyRepository.findByBedroomNum(num);
        List<PropertyResponse> propertyResponses = new ArrayList<>();
        for(Property property : properties){
            PropertyResponse propertyResponse = new PropertyResponse();
            propertyResponse.setLocation(property.getLocation());
            propertyResponse.setArea(property.getArea());
            propertyResponse.setBedroomNum(property.getBedroomNum());
            propertyResponse.setBathroomNum(property.getBathroomNum());
            propertyResponse.setLandmark(property.getLandmark());
            SellerResponse sellerResponse = new SellerResponse(property.getSeller().getFirstname(), property.getSeller().getLastname(), property.getSeller().getEmail(), property.getSeller().getPhone());
            propertyResponse.setSellerResponse(sellerResponse);
            propertyResponses.add(propertyResponse);
        }
        return propertyResponses;
    }

    public List<PropertyResponse> getPropertiesByBathroomNum(int num){
        List<Property> properties = propertyRepository.findByBathroomNum(num);
        List<PropertyResponse> propertyResponses = new ArrayList<>();
        for(Property property : properties){
            PropertyResponse propertyResponse = new PropertyResponse();
            propertyResponse.setLocation(property.getLocation());
            propertyResponse.setArea(property.getArea());
            propertyResponse.setBedroomNum(property.getBedroomNum());
            propertyResponse.setBathroomNum(property.getBathroomNum());
            propertyResponse.setLandmark(property.getLandmark());
            SellerResponse sellerResponse = new SellerResponse(property.getSeller().getFirstname(), property.getSeller().getLastname(), property.getSeller().getEmail(), property.getSeller().getPhone());
            propertyResponse.setSellerResponse(sellerResponse);
            propertyResponses.add(propertyResponse);
        }
        return propertyResponses;
    }
    
    public List<PropertyResponse> getPropertiesBySeller(int id){
        List<Property> properties = propertyRepository.findBySeller_Id(id);
        List<PropertyResponse> propertyResponses = new ArrayList<>();
        for(Property property : properties){
            PropertyResponse propertyResponse = new PropertyResponse();
            propertyResponse.setLocation(property.getLocation());
            propertyResponse.setArea(property.getArea());
            propertyResponse.setBedroomNum(property.getBedroomNum());
            propertyResponse.setBathroomNum(property.getBathroomNum());
            propertyResponse.setLandmark(property.getLandmark());
            SellerResponse sellerResponse = new SellerResponse(property.getSeller().getFirstname(), property.getSeller().getLastname(), property.getSeller().getEmail(), property.getSeller().getPhone());
            propertyResponse.setSellerResponse(sellerResponse);
            propertyResponses.add(propertyResponse);
        }
        return propertyResponses;
    }
}
