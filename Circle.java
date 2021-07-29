package com.company;

import java.util.Scanner;

public class Circle {

    Scanner input = new Scanner ( System.in );


    double pi = Math.PI;


     Double getArea(){

         System.out.print ("Please Enter Radius to get Area: ");

         double radius = input.nextDouble ();

         double area = pi * Math.pow (radius,2);

         return area;
    }

     Double getPerimeter(){

         System.out.print ("Please Enter Radius to get Perimeter: ");

         double radius = input.nextDouble ();

         double perimeter = 2 * pi * radius;

        return perimeter;
    }
}
