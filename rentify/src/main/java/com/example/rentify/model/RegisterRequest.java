package com.example.rentify.model;

import javax.validation.constraints.Email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegisterRequest {
    
    private String firstname;
    private String lastname;
    @Email(message = "Enter correct Email")
    private String email;
    private long phone;
    private String password;
    private String role;
}
