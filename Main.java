package com.company;


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


        return bigWord;
    }


    public static void main(String[] args) {

        System.out.println (longStr ( "Hi world" ));
    }
}
