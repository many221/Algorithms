package com.company;

import java.util.Scanner;

public class Main {

    static Scanner input = new Scanner ( System.in );

    //Hours to seconds
    static Integer hourToSecond(){

        ;
        System.out.print ("Please Enter Hours: ");
        int hours = input.nextInt ();
        int minutesAndSeconds = 60;
        int minutesInHour = hours*minutesAndSeconds;
        int secondsInMinutes = minutesInHour*minutesAndSeconds;


        return secondsInMinutes;
    }

    public static void main(String[] args) {

        //hours to seconds
        //System.out.println (hourToSecond ());

        /*Circle
         Circle smallCircle = new Circle ();
         System.out.println (smallCircle.getArea ());
         System.out.println (smallCircle.getPerimeter ());
          */

        //Square
        System.out.print ("Please enter a number: ");
        perfectPatch square1 = new perfectPatch ( input.nextInt () );
        System.out.println (square1.getSquare ());
        
        //Square p2

    }
}
