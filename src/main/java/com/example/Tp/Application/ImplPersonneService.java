package com.example.Tp.Application;

import com.example.Tp.Application.exception.UserNotFoundExeception;
import com.example.Tp.Domaine.Departement;
import com.example.Tp.Domaine.DepartementRepository;
import com.example.Tp.Domaine.Personne;
import com.example.Tp.Domaine.PersonneRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Data
@Service
public class ImplPersonneService implements PersonneService{

    @Autowired
    private  PersonneRepository personneRepository;
    @Autowired
    private DepartementRepository departementRepository;

    public ImplPersonneService(PersonneRepository personneRepository) {
        this.personneRepository = personneRepository;
    }

    @Override
    public void deletePersonneById(Long id) {
        personneRepository.deleteById(id);
    }

    @Override
    public List<VOPersonne> findAllPersonne() {
        List<Personne> personnes = personneRepository.findAll();
        return personnes.stream().map(departement -> new VOPersonne(departement, new DepartementVO(departement.getDepartement()))).collect(Collectors.toList());
    }

    @Override
    public Personne getPersonneById(Long id) {
        return personneRepository.findById(id).get();
    }

    @Override
    public VOPersonne updatePersonne(Long id, VOPersonne voPersonne){
        Optional <Personne> personneOptional = personneRepository.findById(id);
        if (personneOptional.isPresent()) {
            Personne personne = personneOptional.get();
            Departement departement = departementRepository.findById(voPersonne.getDepartement().getId_DEP()).
                    orElseThrow(() -> new IllegalArgumentException("Département introuvable"));

            personne.setNom(voPersonne.getNom());
            personne.setPrenom(voPersonne.getPrenom());
            personne.setAge(voPersonne.getAge());
            personne.setDepartement(departement);
            Personne updatedPersonne = personneRepository.save(personne);
            return new VOPersonne(updatedPersonne, new DepartementVO(updatedPersonne.getDepartement()));
        }
        return  null;
    }

    @Override
    public VOPersonne addPersonne(VOPersonne vOPersonne) {
        Departement departement = departementRepository.findById(vOPersonne.getDepartement().getId_DEP()).
                orElseThrow(() -> new IllegalArgumentException("Département introuvable"));
        if (departement == null) {
            throw new IllegalArgumentException("Département invalide");
        }
        Personne personne = new Personne(
                vOPersonne.getNom(),
                vOPersonne.getPrenom(),
                vOPersonne.getAge(),
                departement
        );
        Personne PersonneAjoutee = personneRepository.save(personne);
        return new VOPersonne(personne,new DepartementVO(personne.getDepartement()));
    }

}
