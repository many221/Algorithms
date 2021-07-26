package com.company;

public class Factoring {

    static Integer factoring(Integer num){

        int factor = 1;

        for (int i = 1; i <= num; i++) {

            factor *= i;
        }

        return factor;
    }
    public static void main(String[] arg){

        System.out.println (factoring ( 5 ));

    }
}
