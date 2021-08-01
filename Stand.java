package com.company;

import java.util.ArrayList;

/*
      Stand Object: inventory(obj)
      Stand Class methods: displayFruit(prints the information of all Fruits available)
*/
public class Stand {

  //public static Fruit [] inventory = new Fruit[count + 1];

  public static ArrayList<Fruit> inventory = new ArrayList<> ();

     static void displayFruit(){

        if (inventory.isEmpty ()) {
            System.out.println ( "Inventory is Empty" );
        }   else if (inventory.size () == 1 )
        {System.out.println ("The Stand has " + inventory.size () + " item in its inventory");
            System.out.println (inventory);

        }else { System.out.println ("The Stand has " + inventory.size () + " items in its inventory");
            for (Fruit i:
                    inventory) {
                System.out.println (i);
            }
        }

    }

}
