package com.example.Tp.Domaine;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface PersonneRepository extends JpaRepository<Personne,Long> {
}
