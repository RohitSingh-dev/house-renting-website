package com.example.rentify.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Property {
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    private String location;
    private String area;
    private int bedroomNum;
    private int bathroomNum;
    private String landmark;

    @ManyToOne
    private Seller seller;

    public Property(String location, String area, int bedroomNum, int bathroomNum, String landmark) {
        this.location = location;
        this.area = area;
        this.bedroomNum = bedroomNum;
        this.bathroomNum = bathroomNum;
        this.landmark = landmark;
    }

}
