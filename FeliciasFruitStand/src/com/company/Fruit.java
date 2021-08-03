package com.company;

/*NOTES
*
* The Fruit class should have an "Override" toString method that returns an output with all of a Fruits information
*
* The Fruit class should also include methods called "purchase" & "addInventory" that update the available and sold quantity of the Fruit
*
*
* * Objects needed:
 * Fruit: Price, Name, Quantity avalible, quantity sold
 * Methods needed: purchase and addInventory (updates sold quantities/update avalible quantity)
 *
 *
 * Fruits: Mango, Apples, Oranges
 *
 * Data types: strings, floats, interger (preferable in monitary situations...1.05 written as 105)
 *
* */

import java.text.NumberFormat;

public class Fruit {

    private int price = 0;
    private String name = "";
    private int quantAvalible = 0;
    private int quantSold = 0;
    private int moneyTotal = 0;


    public Fruit(String name, int price, int qSold, int qAvall){
        this.name = name;
        this.price = price;
        this.quantAvalible = qAvall;
        this.quantSold = qSold;

    }

    public void purchase(int value) {

        if(this.quantAvalible < value) System.out.println("Oops! Our stock is too small to fulfill your order. Please enter another amount." + "\nCurrent Inventory: " + quantAvalible + "\n");

        else {
            this.quantSold += value;
            this.quantAvalible -= value;
        }
    }

    public void addInventory (int value) { //updates avalible quantity of fruit
        this.quantAvalible += value;

    }

    public int getQuantAvalible() {
        return quantAvalible;
    }

    public int profit() {
        return moneyTotal = price / 100 * quantSold;
    }

    public int profitLoss() {
        return moneyTotal = price / 100 * quantAvalible;
    }

    @Override
    public String toString() {//for our human readers

        String output = "";

        NumberFormat currency = NumberFormat.getCurrencyInstance();


        output += "Name: " + name  + "\nPrice: " + currency.format(price / 100) + "\nAvailable Quantity: " + quantAvalible + " Bundles" + "\nAmount Sold: " + quantSold + " Bundles" + "\nTotal Profit: " + currency.format(profit()) + "\nProfit Loss: " + currency.format(profitLoss())+ "\n";


        return output;
    }


}
