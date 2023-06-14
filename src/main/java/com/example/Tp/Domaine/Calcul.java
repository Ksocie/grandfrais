package com.example.Tp.Domaine;

public class Calcul {
    private float a ;
    private float b ;
    public Calcul(float a, float b) {
        this.a = a;
        this.b = b;
    }
    public float additionner(float a, float b) {
        return a + b;
    }
    public float soustraire(float a, float b) {
        return a - b;
    }
    public float multiplier(float a, float b) {
        return a * b;
    }
    public float diviser(float a, float b) throws Exception {
        if(b != 0){
            return a / b;
        }
        throw new Exception();
    }
    public float carre(float a) {
        return multiplier(a, a);
    }
    public float identiteRemarquable(float a, float b) {
        float a2 = multiplier(a, a); // a^2
        float b2 = multiplier(b, b); // b^2
        float ax2 = multiplier(2, a); // 2xa
        return additionner(additionner(a2, multiplier(ax2, b)), b2);
    }
}
