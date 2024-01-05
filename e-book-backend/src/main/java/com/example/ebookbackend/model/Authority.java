package com.example.ebookbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users_roles")
public class Authority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "users_id")
    private Users users;

    public Authority() {
    }
}