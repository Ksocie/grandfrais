package com.example.Tp.Domaine;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "personne")
public class Personne implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false , updatable = false)
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "age")
    private Integer age;

    @ManyToOne
    @JoinColumn(name = "id_DEP")
    Departement departement;
    public Personne() {
    }
    public Personne(String nom, String prenom, Integer age, Departement departement) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.departement = departement;
    }

    public Personne(Long id, String nom, String prenom, int age, Departement departement1  ){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.departement = departement1;
    }
}