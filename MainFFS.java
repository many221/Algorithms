package com.company;


import java.util.Scanner;

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

    public static void main(String[] args) {

        Scanner input = new Scanner ( System.in );

        //while true loop will run
        boolean addMoreFruit = false;

        //ask user to add fruit by if input is true
        System.out.print ("Would you like to add items to inventory?: (Y/N) ");

        String check = input.nextLine ();

        switch (check){
            case "Y", "y", "Yes", "yes" -> addMoreFruit = true;
            default -> System.out.print ( "No items have been added to inventory!" );
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
            System.out.print ("Please enter the Quantity Available: ");
            fruity.quantAvailable = input.nextInt ();

            //breaks the loop based off of user input
            System.out.print ("Would you like to add another fruit? (Y/N) ");
            String check2 = input.next ();

            //pauses the loop
            addMoreFruit = false;

            switch (check2) {
                case "Y", "y", "Yes", "yes" -> addMoreFruit = true;
                default -> System.out.println ( "Items have been added to inventory!" );
            }

        }


        //System.out.println (Stand.inventory);
        Stand.displayFruit ();



    }
}
