package com.company;


import java.io.Serializable;

/*
    Fruit Object:price, name, quantity available and quantity sold
    Fruit Class Methods: Override toString(returns an output with all of a Fruits information),
                         purchased(update sold quantity),
                         addInventory(update available quantity)

    Fruits: Mangoes, Apples, Oranges
    Fruit DataTypes: Price(int with casting), Name(string),quantityAvailable(int),quantitySold(int)

    (fruit data types: strings, floats, integer (preferable in monetary situations...1.05 written as 105))
 */
public class Fruit implements Serializable {

    float price;
    String name;
    String fruitType;
    int quantSold;
    int quantAvailable;
    float profit;

    public Fruit  (String fruitType, String name, float price, int quantityAvailable) {

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
       profit = quantSold * price;
       Stand.totalProfit += profit;
    }

    void addQuantity(int bought){
        quantAvailable += bought;
    }

    //could be float but doesnt have use now
    void getProfit(){
        System.out.println (name +" has to made $" + profit);
    }
    //could be float but doesnt have use now
    void getPotentialProfit(){
        float potentialProfit = quantAvailable * price;
        System.out.println (name +" has a potential to make $" + potentialProfit);
    }


@Override
   public String toString(){
       String fruitInfo = "Fruit Type: " + fruitType + ", Name: " + name + ", Price: " + price + ", Available: " + quantAvailable + ", Sold:" + quantSold;
        return fruitInfo;
    }



}
