package com.company;

import java.util.Scanner;

/*
Challenge 1 - Conditionals: Leap Year
  Method Name: isLeapYear
  Return type: boolean
  parameters: int year


the method should return true if the year is a leap year and false if it is not.
  Leap years are years that are divisible by 4 except if they are divisible by 100 and again except if they are divisible by 400.
Examples: 2004 IS a leap year, divisible only by 4 | 2100 is NOT a leap year, while it is divisible by 4 it's also divisible by 100 invalidating it. | 2400 IS a leap year, while divisible by 4 and 100 which would invalidate it; since it's also divisible by 400 it is a leap year again.


Challenge 2 - Looping - Fibonacci sequence
  Method Name: Fib
  Return Type: int
  parameters: int pos
the method should return the number that falls into position pos in the fibonacci sequence.
The fibonacci sequence is 0 1 1 2 3 5 8... the sequence starts with 0 and 1 and the next number in the sequence is the sum of the two previous. 0 + 1 = 1; 1 + 1 = 2, 1 + 2. = 3, 2 + 3 = 5, 3 + 5 = 8 and so on.
examples:
  fib(2) = 1 the number 0 is considered the 0th position in the sequence. 1 is the 1st position and 1 is also the 2nd position.
  fib(6) = 8
  fib(10) = 55
*/
public class Practice {



    static boolean isLeapYear(Integer year) {

        boolean leap = false;

        if (year % 4 == 0 || year % 100 == 0 || year % 400 == 0) {

          return true;
        }
        return false;
    }

    static Integer fib(Integer num){

        int a = 1, b = 0, c = 0;

        for (int i = 0; i < num; i++) {

            c = a + b;
            a = b;
            b = c;

        }

        return c;
    }



    public static void main(String[] arg){

        Scanner input = new
                Scanner (System.in);

        //leap

        System.out.print ( "Please enter a year " );
        int year = input.nextInt ();
        System.out.println (isLeapYear ( year ));

        //fib

        System.out.print ( "Please enter a number " );
        int number = input.nextInt ();
        System.out.println (fib (number));

    }
}