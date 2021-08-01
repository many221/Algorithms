package com.company;

import java.io.*;

//this will be used for saving and accessing user input once I figure it out
public class UserInput
{
    static void saveOutput(Fruit val) throws FileNotFoundException,IOException {

        ObjectOutputStream out = new ObjectOutputStream ( new FileOutputStream ( "fruitData.txt" ) );

        out.writeObject ( val );
    }
//this is as far as I got for this
}
