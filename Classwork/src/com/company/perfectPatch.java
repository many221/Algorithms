package com.company;

import java.util.Arrays;

import static java.lang.System.*;

public class perfectPatch {

    private static int size = 0;

    private static final int[] tempArr  = new int[0];

    private static String array = Arrays.toString ( tempArr );

    public perfectPatch(int number){
        this.size = number;
        this.array = array;
    }

    public String getSquare(){

    if (size != 0){

        int[] arrayOne = new int[size];
        int[][] arrayTwo = new int[size][size];

        for (int i = 0; i < size; i++) {

            arrayOne[i] = size;
            arrayTwo[i] = arrayOne;
        }

       array = Arrays.deepToString ( arrayTwo );

        for (int[] i:arrayTwo) {
            out.println ( Arrays.toString ( arrayOne ) );
        }
    }

        return array;
    }

}

















