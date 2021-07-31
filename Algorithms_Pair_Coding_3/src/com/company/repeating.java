package com.company;

import java.util.Scanner;

public class repeating {

    static String repeat(String a, int num){

        String newStr = "";

        for (int i = 0; i < num; i++) {

            newStr += a;
        }

        return newStr;
    }


    public static void main(String[] arg){

        Scanner input =
                new Scanner ( System.in );

        System.out.print ( "Please enter a string " );
        String word = input.next ();

        System.out.print ( "Please enter a number " );
        int num = input.nextInt ();

        System.out.println (repeat ( word, num ));
    }
}
