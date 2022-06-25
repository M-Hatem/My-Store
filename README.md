# Project Title

My Store

# Table of content

- [Description](#project-description)
- [Technologies](#technologies-i-used)
- [Installation](#installation)
- [Usage](#usage)
- [Notes](#notes)

# Project Description

This is a CRUD system for adding, modifying and removing items from or to a cart with a validation system for making all things right.

# Usage

The home page is the products-list that show all the available products that anyone can buy, after choosing the product you want by entering the product page and read all the details of the product, you simply add it to the cart and an alert will be shown to confirm that action, when you enter your cart, you will be able to modify the amount of the items you want and the price will be update automatically, you will be able to remove any product from the cart by pressing remove from cart button or by reducing the number of amount to zero, a new alert will be shown to confirm your action. after deciding what you want to buy, you will simply fill the form with the required data, and submit button won't be available to be clicked unless you entered the correct data. after purchasing the products you want, you will be directed to a confirmation page to show you the total price of the products and the duration of shipping.

# Notes

- The store is designed only for web version, there's no responsive design.
- ngModel is used in the template drived form but not for two way data-binding.
- Input decorator is used to pass a property from product-list component to product-item component by using the ngFor structural-directive but there were no need to use output decorator.

# Technologies i used

- Angular CLI for generating components and service.
- Bootstrap V5 for styling.

# Installation

Simply type in Terminal **_npm install_** and then **_ng serve_** or **_ng s_** for serving and starting the project on a web page with port 4200.
