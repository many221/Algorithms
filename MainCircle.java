package com.company;

import java.util.Scanner;

public class Main {

    //Hours to seconds
    static Integer hourToSecond(){

        Scanner input = new Scanner ( System.in );
        System.out.print ("Please Enter Hours: ");
        int hours = input.nextInt ();
        int minutesAndSeconds = 60;
        int minutesInHour = hours*minutesAndSeconds;
        int secondsInMinutes = minutesInHour*minutesAndSeconds;


        return secondsInMinutes;
    }

    public static void main(String[] args) {

        System.out.println (hourToSecond ());

        Circle smallCircle = new Circle ();

        System.out.println (smallCircle.getArea ());
        System.out.println (smallCircle.getPerimeter ());

    }
}
