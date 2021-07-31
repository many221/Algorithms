package com.company;

import java.text.NumberFormat;
import java.util.Scanner;

public class Main {
// Mortgage Calculator


    static String mortgage(){

        Scanner input = new Scanner ( System.in );

        //Gets Principal
        System.out.print ("Please Enter Principal: ");
        int p = input.nextInt ();

        //Gets Annual interest rates
        System.out.print ("Please Enter Annual Interest Rates: ");
        double r = ((input.nextDouble () / 100) / 12 );

        //Gets time period in years
        System.out.print ("Please Enter How Many Years The Loan Period is: ");
        int n = input.nextInt () * 12;

        //Had to break down the mortgage formula into several variables to get it to work properly
        double interest = Math.pow ((1 + r),n);
        double interest1 = interest * r;
        double interest2 = interest - 1;


        double m = Math.round (p * (interest1/interest2) );

        String currency = NumberFormat.getCurrencyInstance ().format ( m );

        String monthlyRate = "Your Monthly Mortgage Payment will be " + currency ;

        return monthlyRate;

    }

    public static void main(String[] args) {

        System.out.println ( mortgage() );

    }

}
/*
Inputs
---------------
Principal:P: int
Annual Interest: r = (annual interest/100 )12: percent float
Period(year):n = period*12: byte

Output
--------------------
Mortgage payment:M: currency

Math
----------------
M = P*(r(1+r)**n/(1+r)**n-1)

* */
