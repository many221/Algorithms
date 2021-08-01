package com.company;


import java.io.IOException;
import java.util.Scanner;

import static com.company.UserInput.saveOutput;

/*Felicia's fruit stand has upgraded. She now serves fruits and meat now.

Create a new InteliJ project called "FeliciasFruitStand"

Objects
Create a Fruit class that can has properties for

 Fruit Object:price, name, quantity available and quantity sold
 Fruit Class Methods: Override toString(returns an output with all of a Fruits information),
                      purchased(update sold quantity),
                      addInventory(update available quantity)

Create a Stand class that has a property for inventory

    Stand Object: inventory
    Stand Class methods: displayfruit(prints the information of all Fruits available)

Methods

The Fruit class should have an "Override" toString method that returns an output with all of a Fruits information
The Fruit class should also include methods called "purchase" & "addInventory" that update the available and sold quantity of the Fruit
The Stand class should have a method called displayFruit that prints the information of all Fruits available*/


public class Main {

    public static void main(String[] args) throws IOException {

        Fruit fruitOne = new Fruit ( "Grape","Cotton Candy",4.99f,20);
        Fruit fruitTwo = new Fruit ( "Oranages", "Blood Orange",2.99f,20);
        Fruit fruitThree = new Fruit ( "Apple","Fuji",0.99f,20);


        Scanner input = new Scanner ( System.in );
        int count = 0;
        //while true loop will run
        boolean addMoreFruit = false;

        //ask user to add fruit by if input is true
        System.out.print ("Would you like to add items to inventory?: (Y/N) ");

        String check = input.nextLine ();

        //Having issue of input on the second loop
        switch (check){
            case "Y", "y", "Yes", "yes" -> addMoreFruit = true;
            default -> System.out.println ( "No items have been added to inventory!" );
        }

        while (addMoreFruit){

            Fruit fruity = new Fruit ( null,null,0,0 );

            //Fruit input
            System.out.print ("Please enter Fruit Type (ex. Orange): ");
            fruity.fruitType = input.nextLine ();
            System.out.print ("Please enter Fruit Name (ex. Clementine): ");
            fruity.name = input.nextLine ();
            System.out.print ("Please enter Fruit Price (ex. 1.99): ");
            fruity.price = input.nextFloat ();
            System.out.print ("Please enter the Quantity Available (ex. 12 ): ");
            fruity.quantAvailable = input.nextInt ();
            saveOutput ( fruity );

            //breaks the loop based off of user input
            System.out.print ("Would you like to add another fruit? (Y/N) ");
            String check2 = input.next();
            //pauses the loop
            addMoreFruit = false;
            count++;
            switch (check2) {
                case "Y", "y", "Yes", "yes" -> addMoreFruit = true;
                default -> System.out.println ( count +" item(s) have been added to inventory!" );
            }

        }

        //Displaying methods

        //System.out.println (fruitTwo.toString ());
//        fruitOne.addQuantity ( 12 );
//        fruitTwo.addQuantity ( 2 );
//        fruitThree.remQuantity ( 5 );
//        fruitOne.remQuantity ( 18 );
//        fruitTwo.remQuantity ( 10 );
//        fruitOne.getProfit ();
//        fruitOne.getPotentialProfit ();


        Stand.displayFruit ();
       // Stand.standProfit ();

        //Won't add Fruit class from terminal.
        //Stand.getFruitType("Apple");
    }
}
