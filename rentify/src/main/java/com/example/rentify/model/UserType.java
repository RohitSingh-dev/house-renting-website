package com.example.rentify.model;

public enum UserType {
    
    BUYER,SELLER;

    public static UserType getUserType(String name){
        switch (name) {
            case "BUYER":
                return UserType.BUYER;

            case "PARENT":
                return UserType.SELLER;
        }

        return null;
    }
}
