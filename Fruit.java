package com.company;
/*
    Fruit Object:price, name, quantity available and quantity sold
    Fruit Class Methods: Override toString(returns an output with all of a Fruits information),
                         purchased(update sold quantity),
                         addInventory(update available quantity)

    Fruits: Mangoes, Apples, Oranges
    Fruit DataTypes: Price(int with casting), Name(string),quantityAvailable(int),quantitySold(int)

    (fruit data types: strings, floats, integer (preferable in monetary situations...1.05 written as 105))
 */
public class Fruit {

    float price;
    String name;
    String fruitType;
    int quantSold;
    int quantAvailable;


    public Fruit(String fruitType, String name, float price, int quantityAvailable) {

        this.price = price;
        this.quantAvailable = quantityAvailable;
        int quantSold = this.quantSold;
        this.name = name;
        this.fruitType = fruitType;
        Stand.inventory.add ( this );

    }


    void remQuantity(int sold){
       quantSold += sold;
       quantAvailable -= sold;
    }

    void addQuantity(int bought){
        quantAvailable += bought;
    }


    @Override
    public String toString(){

        return "Fruit Type: " + fruitType + ", Name: " + name + ", Price: " + price + ", Available: " + quantAvailable + ", Sold:" + quantSold;
    }



}

