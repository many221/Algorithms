package com.company;

import java.util.Scanner;

public class Factoring {

    static Integer factoring(Integer num){

        int factor = 1;

        for (int i = 1; i <= num; i++) {

            factor *= i;
        }

        return factor;
    }
    public static void main(String[] arg){

        Scanner input = new
                Scanner ( System.in );

        System.out.print ( "Please enter a number to factor " );
        int number = input.nextInt ();
        System.out.println (factoring ( number ));

    }
