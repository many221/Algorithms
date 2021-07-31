package com.company;

import java.text.NumberFormat;
import java.util.Scanner;

public class mortgage_part_2 {
    // Mortgage Calculator


    static String mortgage() {

        Scanner input = new Scanner ( System.in );

        //Gets Principal
        int p;
        while (true) {
            System.out.print ( "Please Enter Principal (1K - 1M): " );
            p = input.nextInt ();
            if (1000 <= p && p <= 1_000_000)
                break;
        }

        //Gets Annual interest rates
        double r;
        while (true) {
            System.out.print ( "Please Enter Annual Interest Rates (0-30%): " );
            r = ( ( input.nextDouble () / 100 ) / 12 );
            if (r > 0 && r <= 30)
                break;
        }
        //Gets time period in years
        int n;
        while (true) {
            System.out.print ( "Please Enter How Many Years The Loan Period is: " );
            n = input.nextInt () * 12;
            if (n/12 >= 1 && n/12 <= 30)
            break;
        }
        //Had to break down the mortgage formula into several variables to get it to work properly
        double interest = Math.pow ( ( 1 + r ), n );
        double interest1 = interest * r;
        double interest2 = interest - 1;


        double m = Math.round ( p * ( interest1 / interest2 ) );

        String currency = NumberFormat.getCurrencyInstance ().format ( m );

        String monthlyRate = "Your Monthly Mortgage Payment will be " + currency;

        return monthlyRate;

    }

    public static void main(String[] args) {

        System.out.println ( mortgage() );

    }
}
