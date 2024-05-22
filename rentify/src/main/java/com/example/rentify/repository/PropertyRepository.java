package com.example.rentify.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.rentify.entity.Property;

@Repository
public interface PropertyRepository extends CrudRepository<Property, Integer>{
    
    public List<Property> findByLocation(String location);

    public List<Property> findByArea(String area);
    
    public List<Property> findByBedroomNum(int bedroomNum);

    public List<Property> findByBathroomNum(int bathroomNum);

    public List<Property> findBySeller_Id(int id);
}
