package org.example;

import static org.junit.Assert.*;
import org.junit.Test;

public class CalculadoraTest {
    @Test
    public void testSuma(){
        Calculadora calc = new Calculadora();
        assertEquals(10.0, calc.Suma(5,5), 0.001);
        assertEquals(0.0, calc.Suma(5,-5), 0.001);
        assertEquals(0.0, calc.Suma(-5,5), 0.001);
        assertEquals(-20, calc.Suma(-10,-10), 0.001);
    }
    @Test
    public void testResta(){
        Calculadora calc = new Calculadora();
        assertEquals(0, calc.Resta(5,5), 0.001);
        assertEquals(20, calc.Resta(10,-10), 0.001);
        assertEquals(-30, calc.Resta(-20,10), 0.001);
        assertEquals(-10, calc.Resta(-20,-10), 0.001);
    }

    @Test
    public void testMultiplicacion(){
        Calculadora calc = new Calculadora();
        assertEquals(25, calc.Multiplicar(5,5), 0.001);
        assertEquals(-25, calc.Multiplicar(5,-5), 0.001);
        assertEquals(-50, calc.Multiplicar(-10,5), 0.001);
        assertEquals(50, calc.Multiplicar(-5,-10), 0.001);
    }
}
