package com.example.rentify.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.example.rentify.entity.LoginInfo;
import com.example.rentify.repository.LoginInfoRepository;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {

        LoginInfo loginInfo = Optional.ofNullable(loginInfoRepository.findByEmail(username))
                .orElseThrow(() -> new RuntimeException("User not found"));

        return User.builder().username(loginInfo.getEmail()).password(loginInfo.getPassword()).authorities(loginInfo.getRole().name()).build();
    }
}
