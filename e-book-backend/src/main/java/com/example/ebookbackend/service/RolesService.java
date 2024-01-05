package com.example.ebookbackend.service;

import com.example.ebookbackend.model.Roles;
import com.example.ebookbackend.repository.RolesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolesService {
    @Autowired
    private RolesRepository rolesRepository;

    public List<Roles> getRoleByName(String name)
    {
        return rolesRepository.findByName(name);
    }
}