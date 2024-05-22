package com.example.rentify.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.rentify.entity.LoginInfo;

@Repository
public interface LoginInfoRepository extends CrudRepository<LoginInfo, Integer>{
    
    public LoginInfo findByEmail(String email);
}
