package org.example;

public class Calculadora {
    public double Suma(double a, double b){
        return a + b;
    }
    public double Resta(double a, double b){
        return a - b;
    }

    public int Multiplicar(int a, int b){
        boolean positivo = b == Math.abs(b);
        int resultado = 0;
        for(int i=0; i<Math.abs(b); i++){
            resultado = positivo ? (int) Suma(resultado, a) :(int) Resta(resultado, a);
        }
        return resultado;
    }
}
