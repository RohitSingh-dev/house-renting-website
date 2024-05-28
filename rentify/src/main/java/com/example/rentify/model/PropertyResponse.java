package com.example.rentify.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PropertyResponse {
    
    private int id;
    private String location;
    private String area;
    private int bedroomNum;
    private int bathroomNum;
    private String landmark;
    private SellerResponse sellerResponse;
}
