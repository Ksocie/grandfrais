package com.example.Tp;

import com.example.Tp.Domaine.Calcul;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class CalculTests {

    @Test
    public void testAdditionner() {
        Calcul calcul = new Calcul(2.5f, 3.7f);
        float result = calcul.additionner(2.5f, 3.7f);
        Assertions.assertEquals(6.2f, result);
    }
    @Test
    public void testSoustraire() {
        Calcul calcul = new Calcul(5.0f, 2.0f);
        float result = calcul.soustraire(5.0f, 2.0f);
        Assertions.assertEquals(3.0f, result);
    }
    @Test
    public void testMultiplier() {
        Calcul calcul = new Calcul(2.0f, 4.5f);
        float result = calcul.multiplier(2.0f, 4.5f);
        Assertions.assertEquals(9.0f, result);
    }
    @Test
    public void testDiviser() throws Exception {
        Calcul calcul = new Calcul(6.0f, 2.0f);
        float result = calcul.diviser(6.0f, 2.0f);
        Assertions.assertEquals(3.0f, result);
    }

    @Test
    public void testDiviserByZero() {
        Calcul calcul = new Calcul(6.0f, 0.0f);
        Assertions.assertThrows(Exception.class, () -> {
            calcul.diviser(6.0f, 0.0f);
        });
    }

    @Test
    public void testCarre() {
        Calcul calcul = new Calcul(4.0f, 0.0f);
        float result = calcul.carre(4.0f);
        Assertions.assertEquals(16.0f, result);
    }

    @Test
    public void testIdentiteRemarquable() {
        Calcul calcul = new Calcul(1.0f, 2.0f);
        float result = calcul.identiteRemarquable(1.0f, 2.0f);
        Assertions.assertEquals(9.0f, result);
    }


}
