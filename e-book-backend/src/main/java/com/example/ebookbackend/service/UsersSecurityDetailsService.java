package com.example.ebookbackend.service;

import com.example.ebookbackend.model.SecurityUsers;
import com.example.ebookbackend.model.Users;
import com.example.ebookbackend.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsersSecurityDetailsService implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users= usersRepository.findByUsername(username);

        if(users==null)
        {
            throw new UsernameNotFoundException("User details not found "+username);
        }
        return new SecurityUsers(users);
    }
}