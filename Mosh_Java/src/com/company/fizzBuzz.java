package com.company;

import java.util.Scanner;

public class fizzBuzz {

    static String fiz(){

        Scanner input = new Scanner ( System.in );

        System.out.print ("Please Enter a Number: ");

        int num = input.nextInt ();

        boolean fizz = false;
        boolean buzz = false;
        String result = String.valueOf ( num );

        if (num % 5 == 0){fizz = true;}
        if (fizz == true){result = "fizz";}
        if (num % 3 == 0){buzz = true;}
        if (buzz == true){ result = "buzz";}
        if (fizz && buzz == true){ result = "fizzbuzz";}




       return result;

        }



    public static void main(String[] arg){
        System.out.println (fiz ());
    }
}
