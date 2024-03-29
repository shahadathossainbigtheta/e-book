package com.example.ebookbackend.repository;

import com.example.ebookbackend.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RolesRepository extends JpaRepository<Roles, Long> {
    List<Roles> findByName(String role);
}