package com.example.rentify.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.rentify.entity.Buyer;
import com.example.rentify.entity.LoginInfo;
import com.example.rentify.entity.Seller;
import com.example.rentify.model.LoginResponse;
import com.example.rentify.model.UserType;
import com.example.rentify.repository.BuyerRepository;
import com.example.rentify.repository.LoginInfoRepository;
import com.example.rentify.repository.SellerRepository;

@Service
public class LoginService {
    
    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Autowired
    private BuyerRepository buyerRepository;

    @Autowired
    private SellerRepository sellerRepository;

    public LoginResponse login(String email, String token){
        LoginInfo loginInfo = loginInfoRepository.findByEmail(email);
        UserType userType = loginInfo.getRole();
        int id=0;
        String name="";
        if(userType.equals(UserType.BUYER)){
            Buyer buyer = buyerRepository.findByEmail(email);
            id= buyer.getId();
            name= buyer.getFirstname();
        }
        else if(userType.equals(UserType.SELLER)){
            Seller seller = sellerRepository.findByEmail(email);
            id= seller.getId();
            name= seller.getFirstname();
        }
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setUserId(id);
        loginResponse.setUserName(name);
        loginResponse.setUserRole(userType.name());
        loginResponse.setUserToken(token);
        return loginResponse;
    }
}
