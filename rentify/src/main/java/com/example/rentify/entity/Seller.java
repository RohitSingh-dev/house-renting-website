package com.example.rentify.entity;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.Email;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Seller {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstname;
    private String lastname;
    @Email(message = "Enter correct Email")
    private String email;
    private long phone;
    private String password;

    @JsonIgnore
    @JsonIgnoreProperties
    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL)
    private List<Property> properties = new ArrayList<>();

    public Seller(String firstname, String lastname, @Email(message = "Enter correct Email") String email, long phone) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
    }
    
}
