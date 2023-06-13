package com.example.Tp.Interfaces;

import com.example.Tp.Application.DepartementService;
import com.example.Tp.Application.DepartementVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class DepartementController {
    @Autowired
    private DepartementService departementService;

    public DepartementController(DepartementService departementService){this.departementService=departementService;}

    @GetMapping("/departement")
    public ResponseEntity<List<DepartementVO>> getAllDepartement(){
        List<DepartementVO> departement = departementService.getAllDepartement();
        return new ResponseEntity<>(departement, HttpStatus.OK);
    }
}
