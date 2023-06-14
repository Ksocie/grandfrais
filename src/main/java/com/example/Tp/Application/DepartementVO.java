package com.example.Tp.Application;

import com.example.Tp.Domaine.Departement;
import lombok.Data;

import java.io.Serializable;
@Data
public class DepartementVO  {
    private Long id_DEP;
    private String designation;


    public  DepartementVO(){}

    public DepartementVO(Departement departement) {
        this.id_DEP = departement.getId_DEP();
        this.designation = departement.getDesignation();
    }


    public DepartementVO(long id, String design) {
        this.id_DEP = id;
        this.designation = design;
    }
}
