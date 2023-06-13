package com.example.Tp.Application;

import com.example.Tp.Domaine.Personne;

import java.util.List;
import java.util.Optional;

public interface PersonneService {
    void deletePersonneById(Long id);
    VOPersonne addPersonne(VOPersonne voPersonne);
    VOPersonne updatePersonne(Long id, VOPersonne voPersonne);
    List<VOPersonne> findAllPersonne();
    Personne getPersonneById(Long id);
}
