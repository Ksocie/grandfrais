package com.example.Tp;

import com.example.Tp.Application.DepartementVO;
import com.example.Tp.Application.ImplPersonneService;
import com.example.Tp.Application.PersonneService;
import com.example.Tp.Application.VOPersonne;
import com.example.Tp.Domaine.Departement;
import com.example.Tp.Domaine.DepartementRepository;
import com.example.Tp.Domaine.Personne;
import com.example.Tp.Domaine.PersonneRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
//@RunWith(MockitoJUnitRunner.Silent.class)
public class ImplPersonneServiceTest {

    @Mock
    private PersonneRepository personneRepository;

    @Mock
    private DepartementRepository departementRepository;

    //@InjectMocks
    @InjectMocks
    private PersonneService personneService = new ImplPersonneService(personneRepository);

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testFindAllPersonne() {

        // Prepare test data
        List<Personne> personnes = new ArrayList<>();
        Departement departement1 = new Departement(1L,"securite");
        Departement departement2 = new Departement(2L,"Comptabilité");
        // Add some Personne objects to the list
        personnes.add(new Personne(1L,"koua","yao",18,departement1));
        personnes.add(new Personne(2L,"kinhon","jean",25,departement2));

        // Mock the personneRepository.findAll() method to return the test data
        when(personneRepository.findAll()).thenReturn(personnes);

        // Call the service method
        List<VOPersonne> resultat = personneService.findAllPersonne();

        // Verify the result
        assertEquals(personnes.size(), resultat.size());

        // Vérifier la correspondance entre les objets Personne et les objets VOPersonne
        for (int i = 0; i < personnes.size(); i++) {
            Personne personne = personnes.get(i);
            VOPersonne voPersonne = resultat.get(i);

            assertEquals(personne.getId(), voPersonne.getId());
            assertEquals(personne.getNom(), voPersonne.getNom());
            assertEquals(personne.getPrenom(), voPersonne.getPrenom());
            assertEquals(personne.getAge(), voPersonne.getAge());
            assertEquals(personne.getDepartement().getId_DEP(), voPersonne.getDepartement().getId_DEP());
        }

        // Verify that the repository method was called
        verify(personneRepository, times(1)).findAll();
    }

    @Test
    void testDeletePersonneById() {
        // Simuler le comportement du repository
        Long id = 1L;
        doNothing().when(personneRepository).deleteById(id);

        // Call the service method
        Assertions.assertDoesNotThrow(() -> personneService.deletePersonneById(id));

        // Verify that the repository method was called
        verify(personneRepository, times(1)).deleteById(id);
    }

    @Test
    void testAddPersonne() {
        // Simuler le comportement du repository département
        Departement departement = new Departement(1L, "Securité");
        when(departementRepository.findById(1L)).thenReturn(Optional.of(departement));

        // Create a VOPersonne object to add
        VOPersonne voPersonne = new VOPersonne();
        voPersonne.setNom("kinhon");
        voPersonne.setPrenom("Jean");
        voPersonne.setAge(25);
        voPersonne.setDepartement(new DepartementVO(1L, "Securité"));

        // Call the service method
        VOPersonne result = personneService.addPersonne(voPersonne);

        // Verify the result
        assertNotNull(result);
        assertEquals(voPersonne.getNom(), result.getNom());
        assertEquals(voPersonne.getPrenom(), result.getPrenom());
        assertEquals(voPersonne.getAge(), result.getAge());
        assertEquals(voPersonne.getDepartement().getId_DEP(), result.getDepartement().getId_DEP());
        assertEquals(voPersonne.getDepartement().getDesignation(), result.getDepartement().getDesignation());

        // Verify that the repository method was called
        verify(departementRepository, times(1)).findById(1L);
        verify(personneRepository, times(1)).save(any(Personne.class));
    }

    @Test
    void testUpdatePersonne() {
        // Create a sample Personne and VOPersonne
        long id = 1L;
        String updatedNom = "John Doe";
        String updatedPrenom = "John";
        int updatedAge = 30;

        Departement departement = new Departement();
        departement.setId_DEP(1L);
        departement.setDesignation("IT Department");

        Personne existingPersonne = new Personne(id, "Jane Doe", "Jane", 25, departement);
        VOPersonne updatedVOPersonne = new VOPersonne();
        updatedVOPersonne.setId(id);
        updatedVOPersonne.setNom(updatedNom);
        updatedVOPersonne.setPrenom(updatedPrenom);
        updatedVOPersonne.setAge(updatedAge);
        updatedVOPersonne.setDepartement(new DepartementVO(departement));

        // Mock the necessary repository methods
        when(personneRepository.findById(id)).thenReturn(Optional.of(existingPersonne));
        when(departementRepository.findById(departement.getId_DEP())).thenReturn(Optional.of(departement));
        when(personneRepository.save(any(Personne.class))).thenReturn(existingPersonne);

        // Invoke the updatePersonne method
        VOPersonne updatedPersonne = personneService.updatePersonne(id, updatedVOPersonne);

        // Verify the results
        assertNotNull(updatedPersonne);
        assertEquals(updatedNom, updatedPersonne.getNom());
        assertEquals(updatedPrenom, updatedPersonne.getPrenom());
        assertEquals(updatedAge, updatedPersonne.getAge());
        assertEquals(departement.getId_DEP(), updatedPersonne.getDepartement().getId_DEP());
        assertEquals(departement.getDesignation(), updatedPersonne.getDepartement().getDesignation());

        // Verify that repository methods were called
        verify(personneRepository, times(1)).findById(id);
        verify(departementRepository, times(1)).findById(departement.getId_DEP());
        verify(personneRepository, times(1)).save(any(Personne.class));
    }

    @Test
    void testGetPersonneById() {
        Long id = 1L;
        Personne personne = new Personne();
        personne.setId(id);

        // Mock the personneRepository.findById() method to return the test data
        when(personneRepository.findById(id)).thenReturn(Optional.of(personne));

        // Call the method under test
        Personne result = personneService.getPersonneById(id);

        // Verify the result
        Assertions.assertEquals(personne, result);
        // Add more assertions as needed
    }









}
