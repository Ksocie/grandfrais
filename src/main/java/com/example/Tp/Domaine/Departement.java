package com.example.Tp.Domaine;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.Set;

@Data
@Entity
@Table(name = "departement")
public class Departement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false , updatable = false)
    private Long id_DEP;

    @Column(name = "code")
    private String code;

    @Column(name = "designation")
    private String designation;

    @OneToMany(mappedBy = "departement")
    private Set<Personne> personnes;
    public Departement(){}

    public Departement(Long id_DEP, String code, String designation) {
        this.id_DEP = id_DEP;
        this.code = code;
        this.designation = designation;
    }
    public Departement(Long id_DEP, String designation) {
        this.id_DEP = id_DEP;
        this.designation = designation;
    }
}
