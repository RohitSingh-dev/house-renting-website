package com.example.rentify.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthenticationModel {
    
    private String email;
    private String password;
    private String role;
}
