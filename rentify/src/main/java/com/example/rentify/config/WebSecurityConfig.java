package com.example.rentify.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@Deprecated
public class WebSecurityConfig {

    @Autowired
    private JwtAuthFilter jwtAuthFilter;
    
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity httpSecurity,
     PasswordEncoder passwordEncoder, UserDetailsService userDetailsService) throws Exception{
        return httpSecurity.getSharedObject(AuthenticationManagerBuilder.class)
        .userDetailsService(userDetailsService)
        .passwordEncoder(passwordEncoder).and().build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, AuthenticationManager authenticationManager) throws Exception{
        
        httpSecurity.csrf(csrf -> csrf.disable()).authorizeRequests((auth)-> 
        auth.requestMatchers(HttpMethod.POST, "/login").permitAll()
        .requestMatchers(HttpMethod.POST, "/register").permitAll()
        .requestMatchers(HttpMethod.GET, "/buyer/**").hasAuthority("BUYER")
        .requestMatchers(HttpMethod.GET, "/seller/**").hasAuthority("SELLER")
        .requestMatchers(HttpMethod.POST, "/property").hasAuthority("SELLER")
        .requestMatchers(HttpMethod.PUT, "/property").hasAuthority("SELLER")
        .requestMatchers(HttpMethod.DELETE, "/property/**").hasAuthority("SELLER")
        .requestMatchers(HttpMethod.GET, "/property/**").hasAnyAuthority("SELLER", "BUYER")
        .anyRequest().authenticated().and().authenticationManager(authenticationManager))
        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }
}
