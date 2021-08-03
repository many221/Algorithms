package com.company;

public class Main {
    private Stand stand;
    public void setStand (Stand newStand) {
        this.stand = stand;//This is to gain access to the stand class
    }

    public static void main(String[] args) {

        //    public Fruit(String name, int price, int qSold, int qAvall)
        Fruit fruit1 = new Fruit("Banana", 300, 80, 50);
        Fruit fruit2 = new Fruit("Mango", 500, 100, 40);
        Fruit fruit3 = new Fruit("Apple", 250, 150, 80);

        fruit1.addInventory(5);
        //System.out.println(fruit1.getQuantAvalible());

        //fruit2.purchase(45); //to demonstrate when the sold amount is more than current inventory
        //System.out.println(fruit2.getQuantAvalible());

        fruit3.addInventory(20);
        fruit3.purchase(15);

//        System.out.println(fruit1.toString());
//        System.out.println(fruit2.toString());
//        System.out.println(fruit3.toString());
          System.out.println();
    }
}

/*NOTES
* Felicia's fruit stand has upgraded. She now serves fruits and meat now.

Objects
Create a Fruit class that can has properties for price, name, quantity available and quantity sold
*
Create a Stand class that has a property for inventory

Methods

The Fruit class should have an "Override" toString method that returns an output with all of a Fruits information

The Fruit class should also include methods called "purchase" & "addInventory" that update the available and sold quantity of the Fruit

The Stand class should have a method called displayFruit that prints the information of all Fruits available
*
*
* MY NOTES!!
* We are working with fruit + meats now
* 3 fruits, 3 types of meat
*
*
* Objects needed:
* Fruit: Price, Name, Quantity avalible, quantity sold
* Methods needed: purchase and addInventory (updates sold quantities/update avalible quantity)
*
*
* Stand: Inventory
* method: displayFruit (prints the information of all Fruits avalible)
*
* Fruit: Mango, Apples, Oranges
*
*
*
*  */