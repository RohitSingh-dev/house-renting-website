package com.example.rentify.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Property {
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    private String location;
    private String area;
    private int no_of_bed;
    private int no_of_bath;
    private List<String> landmark;
}
