### INNRAN532_BCL2401_GroupB_InnocentRangaka_JSL06

# Restaurant Menu System

This project demonstrates a simple restaurant menu system implemented using JavaScript.

![alt text](JSL06-solution.gif)

## Features:

* Displays menu items categorized as Starters, Main Courses, and Desserts.
* Allows adding items to an order by clicking on them.
* Calculates and displays the total order price (assuming each item costs $60).

## Functionality Overview:

### Menu Data:

* The menu object defines the menu categories and their corresponding items.
* In a real-world scenario, this data might be fetched from a server.

### displayMenuItems Function:

* This function iterates through the menu object and creates HTML elements to represent:
    * Category headings (<h3>) with the category name.
    * Unordered lists (<ul>) to hold the items for each category.
    * List items (<li>) for each menu item, displaying the item name.
* It also attaches a click event listener to each list item, triggering the addToOrder function when clicked.

### addToOrder Function (Callback for Click Event):

* This function receives the clicked item name as an argument.
* It creates a new list item (<li>) to represent the ordered item.
* It appends the new list item to the order list container (<ul> with ID "order-items").
* It calculates the total order price by multiplying the number of ordered items by $60 (assumed price per item).
* It updates the order total displayed in the element with ID "order-total".

### initMenuSystem Function:

* This function initializes the menu system by calling the displayMenuItems function to populate the menu.

### Further Enhancements:

Check my enhanced [project](/myproject/index.html) with the following features:

* Displays menu items categorized by Starters, Main Courses, and Desserts.
* Allows adding menu items to an order list.
* Calculates and updates the total price of the order.
* Enables removing items from the order and updating the total accordingly.
