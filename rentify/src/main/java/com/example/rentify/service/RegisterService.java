package com.example.rentify.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.rentify.entity.Buyer;
import com.example.rentify.entity.LoginInfo;
import com.example.rentify.entity.Seller;
import com.example.rentify.model.RegisterRequest;
import com.example.rentify.model.UserType;
import com.example.rentify.repository.BuyerRepository;
import com.example.rentify.repository.LoginInfoRepository;
import com.example.rentify.repository.SellerRepository;

@Service
public class RegisterService {
    
    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Autowired
    private BuyerRepository buyerRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String register(RegisterRequest registerRequest){
        LoginInfo loginInfo = loginInfoRepository.findByEmail(registerRequest.getEmail());
        if(Objects.nonNull(loginInfo)){
            throw new RuntimeException("User already exists, Enter different email");
        }
        if(UserType.getUserType(registerRequest.getRole()).equals(UserType.BUYER)){
            String password = passwordEncoder.encode(registerRequest.getPassword());
            loginInfo = new LoginInfo(registerRequest.getEmail(), password, UserType.BUYER);
            loginInfoRepository.save(loginInfo);
            Buyer buyer = new Buyer(registerRequest.getFirstname(), registerRequest.getLastname(), registerRequest.getEmail(), registerRequest.getPhone());
            buyer.setPassword(password);
            buyerRepository.save(buyer);
        }
        else{
            String password = passwordEncoder.encode(registerRequest.getPassword());
            loginInfo = new LoginInfo(registerRequest.getEmail(), password, UserType.SELLER);
            loginInfoRepository.save(loginInfo);
            Seller seller = new Seller(registerRequest.getFirstname(), registerRequest.getLastname(), registerRequest.getEmail(), registerRequest.getPhone());
            seller.setPassword(password);
            sellerRepository.save(seller);
        }

        return "User Registered Successfully";
    }
}
