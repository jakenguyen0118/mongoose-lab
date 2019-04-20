[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Requirements

Describe behavioral requirements as you'll be using them in tests. That is, list
requirements in language that describes how the written code will be used, not
how it will be written, with the exception of constraints you may wish to place
on implementation. It's a good idea to include the below paragraph verbatim.

## Bonus

Bonuses are described after the requirements, if included. They should be worked
on **only after** passing requirements.

Less experienced students should be able to complete the base requirements in
the alloted time for labs and in around 2 hours for homework; more experienced
students should be to complete the bonus.

Sometimes, we ask questions that promote thinking critically about code.

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.

# YUM!

We will be writing a node application to practice using Mongoose.
Your task: create an app that tracks and stores Restaurants and Menu Items.

We will be providing you seed data, and part of the assignment is determining the best way to write the models. Often in the real world we engineers we have to determine the best way to integrate exist datasets with our applications, and today we are fortunate in that we have full freedom to make our Models work with our data.

## Prerequisites

- ERDs
- Express
- MongoDB
- Mongoose

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Install dependencies.
4. Fulfill the listed requirements.

You can test your code by running `nodemon` in the Terminal.

Please turn in your submission by the deadline on your cohort calendar.

## Part I: Mongoose

You'll begin by creating an app that performs CRUD functionality on a database
using Mongoose queries. You should not be using Express yet.

1. Create schemas and corresponding models for a restaurant and for menu items.

2. Adds seed data for the restaurant and menu items...

   - A restaurant should have the following field names...

   - `name` - a string
   - `address` - an object with a `street` (string) and `zipcode` property
     (number)
   - `yelpUrl` - a string
   - `items` - an array containing your MenuItems schema

   - A menu item should contain the followin...

   - `title` - a string

3. Create a new restaurant.

4. Write a function or method that finds a restaurant by `name`.

5. Write a function or method that finds all restaurants by `zipCode`.

6. Create a function that updates a restaurant.

7. Write a function or method that deletes a restaurant.

8. Write methods to add and remove embedded menu item documents for a
   restaurant of your choosing.

## Bonus: Add Express

> You will know how to do this after the Express + Mongoose lesson.
> Feel free, however, to give this a shot!

Turn YUM into an Express app with routes that you can view in your browser and
forms that manipulate your data with full CRUD.

Your app should have two pages...

- A page that lists all restaurants, on which a user can create a new
  restaurant.
- A page that lists one restaurant and all its menu items, on which a user
  can...
  - Delete the restaurant.
  - Update the restaurant.
  - Create a new menu item for the restaurant.
  - Delete a menu item from the restaurant.
