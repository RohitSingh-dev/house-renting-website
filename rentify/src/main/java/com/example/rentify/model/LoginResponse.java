package com.example.rentify.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {
    
    private int userId;
    private String userName;
    private String userRole;
    private String userToken;
}
