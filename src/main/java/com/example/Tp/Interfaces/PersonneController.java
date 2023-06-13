package com.example.Tp.Interfaces;

import com.example.Tp.Application.PersonneService;
import com.example.Tp.Application.VOPersonne;
import com.example.Tp.Domaine.Personne;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class PersonneController {
    @Autowired
    private  PersonneService personneService;

    public PersonneController(PersonneService personneService) {
        this.personneService = personneService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<VOPersonne>> getAllPersonnes(){
        List<VOPersonne> personnes = personneService.findAllPersonne();
        return new ResponseEntity<>(personnes, HttpStatus.OK);
    }
    /*@GetMapping("/find/{id}")
    public ResponseEntity<Personne> getPersonneById(@PathVariable("id") Long id){
        Personne personne = personneService.findPersonneById(id);
        return new ResponseEntity<>(personne, HttpStatus.OK);
    } */
    @PostMapping("/add")
    public ResponseEntity<VOPersonne> addPersonne(@RequestBody VOPersonne vOPersonne){
       VOPersonne Newpersonne = personneService.addPersonne(vOPersonne);
       return new ResponseEntity<>(Newpersonne, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity< VOPersonne> updatePersonne(@PathVariable("id") Long id
            ,@RequestBody VOPersonne voPersonne){
        VOPersonne updatePersonne = personneService.updatePersonne(id,voPersonne);
        return new ResponseEntity<VOPersonne>(updatePersonne, HttpStatus.CREATED);
    }

    @GetMapping("/personne/{id}")
    public ResponseEntity<Personne> getPersonneById(@PathVariable Long id) {
        return new ResponseEntity<Personne>(personneService.getPersonneById(id), HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteVO(@PathVariable("id") Long id){
        personneService.deletePersonneById(id);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }


}
