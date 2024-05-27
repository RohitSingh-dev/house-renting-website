package com.example.rentify.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PropertyResponse {
    
    private String location;
    private String area;
    private int bedroomNum;
    private int bathroomNum;
    private List<String> landmark;
    private SellerResponse sellerResponse;
}
