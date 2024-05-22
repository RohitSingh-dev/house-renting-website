package com.example.rentify.entity;

import javax.validation.constraints.Email;

import com.example.rentify.model.UserType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class LoginInfo {
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    @Email
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserType role;

    public LoginInfo(@Email String email, String password, UserType role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
    
}
