package com.company;

/*NOTES
*
* The Stand class should have a method called displayFruit that prints the information of all Fruits available
*
* Stand: Inventory
 * method: displayFruit (prints the information of all Fruits avalible)
 *
 *
 * Data types: int, object(explicit casting...calling itself and all classes)
 * Ex: Stand.inventory
*
* */

public class Stand {
    private Main main; //the goal was to connect the data used in Main for the fruit
    private Fruit[] inventory;

    public Stand(Fruit[] inv) {

        //this.inventory = inv;

        System.out.println("Test: " + inv);

    }

    public String displayFruit(Fruit inv){

        return "";
    }


}
