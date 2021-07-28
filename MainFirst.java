package com.company;

import java.util.Locale;

public class Main {


    //temperature conversion
    static Integer  tempConversion(Integer celsius){

        Integer fahrenheit = celsius * (9 / 5) + 32;

    return fahrenheit;
    }


    //title case
    static String titleCase(String val){

       String[] letters = val.split(" ");

      String[] processed = new String [letters.length];

        for (int i = 0; i < letters.length; i++) {

           processed[i] = letters[i].substring(0,1).toUpperCase() + letters[i].substring(1).toLowerCase();
        }

        String newStr = String.join(" ", processed);
        return newStr;
    }


    //reverse string method
    static String reverseMethod(String val){

        String[] letters = val.split("");

        String reverse = "";

        for (int i = val.length() - 1; i >= 0 ; i--) {

            reverse += letters[i];

        }

        return reverse;

    }



    public static void main(String[] args){

        System.out.println(tempConversion(30));

        System.out.println(titleCase("hElLO wORld"));
        
        System.out.println(reverseMethod("L6$aMKaA!.Yfbud"));

    }



}


/*
function reversy(word) {
   // let backwards = word.reverse()
    let backwards = []
    for (let i = 0; i < word.length; i++) {
         backwards.unshift(word[i])

    }
   return backwards.join('')

* */



