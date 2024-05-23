package com.example.rentify.model;

import javax.validation.constraints.Email;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SellerResponse {
    
    private String firstname;
    private String lastname;
    @Email(message = "Enter correct Email")
    private String email;
    private long phone;
}
