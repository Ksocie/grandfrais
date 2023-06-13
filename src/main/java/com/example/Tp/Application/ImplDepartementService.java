package com.example.Tp.Application;

import com.example.Tp.Domaine.Departement;
import com.example.Tp.Domaine.DepartementRepository;
import com.example.Tp.Domaine.Personne;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Service
public class ImplDepartementService implements DepartementService {
    @Autowired
    private DepartementRepository departementRepository;

    @Override
    public List<DepartementVO> getAllDepartement(){
        List<Departement> GetDepartement = departementRepository.findAll();

        //La méthode stream() est appelée sur la collection departements pour créer un flux d'éléments
        return GetDepartement.stream()
                //La méthode map() est ensuite utilisée pour appliquer une fonction de mapping à chaque élément du flux
                .map(departement -> {
                    DepartementVO departementVo = new DepartementVO();
                    departementVo.setId_DEP(departement.getId_DEP());
                    departementVo.setDesignation(departement.getDesignation());
                    return departementVo;
                })
                //La méthode collect() est utilisée pour collecter les éléments mappés dans une Liste<DepartementVo>
                .collect(Collectors.toList());
    }
}
