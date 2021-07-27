package com.company;


import java.util.Scanner;

//Longest String
public class Main {

    static String longStr( String val){

        String bigWord = "";

        String[] arrStr = val.split ( " " );

        for (int i = 0; i < arrStr.length; i++) {

            if (arrStr[i].length () > bigWord.length ()){

                bigWord = arrStr[i];
            }
        }

        String word = "\"%s\" has letters in it %s".formatted ( bigWord,bigWord.length () );

        return word;
    }


    public static void main(String[] args) {

        Scanner sentence = new
                Scanner ( System.in );
        System.out.print ( "Please write a sentence " );
        System.out.println (longStr (sentence.next()));
    }
}