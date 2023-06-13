package com.example.Tp.Application;

import com.example.Tp.Domaine.Departement;
import com.example.Tp.Domaine.Personne;
import jakarta.persistence.Column;
import lombok.Data;

import java.io.Serializable;
@Data
public class VOPersonne  {

    private Long id;
    private String nom;
    private String prenom;
    private Integer age;
    private DepartementVO departement;

    public VOPersonne(){}
    public VOPersonne(Personne personne, DepartementVO departement) {
        this.id = personne.getId();
        this.nom = personne.getNom();
        this.prenom = personne.getPrenom();
        this.age = personne.getAge();
        this.departement = departement;
    }
    public VOPersonne( Personne VoUpdatePersonne) {}
}
