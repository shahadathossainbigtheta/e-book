package com.example.ebookbackend.controller;

import com.example.ebookbackend.model.Users;
import com.example.ebookbackend.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import java.security.Principal;

@RestController
public class LoginController {
    @Autowired
    private UsersRepository usersRepository;



    @RequestMapping("/user/login")
    public ResponseEntity<?> getUserDetailsAfterLogin(Principal user) {
        Users users=usersRepository.findByUsername(user.getName());
        return ResponseEntity.ok().body(users);
    }

}