[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# YUM!

We will be writing a node application to practice using Mongoose. Your task:
create an app that tracks and stores Restaurants and Menu Items.

We will be providing you seed data, and part of the assignment is determining
the best way to write the models. Often in the real world we engineers we have
to determine the best way to integrate exist datasets with our applications, and
today we are fortunate in that we have full freedom to make our Models work with
our data.

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

## Requirements

You'll begin by creating an app that performs CRUD functionality on a database
using Mongoose queries. You should not be using Express yet.

1. Create schemas and corresponding models for a restaurant and for menu items.

2. In `db/seed.js`, write the logic to use the data in `db/seedData.json` to
   seed the database.

3. Run `node db/seed.js` to seed the database.

4. In `index.js` write functions/methods for each of the following CRUD actions:

- Create a new restaurant
- Find (aka Get) a restaurant by `name`
- Find all restaurants by `zipCode`
- Update a restaurant
- Delete a restaurant
- Add a menu item from a restaurant
- Remove a menu item a restaurant

## Bonus: Add Express

> You will know how to do this after the Express + Mongoose lesson. Feel free,
> however, to give this a shot!

Turn YUM into an Express app with routes that you can view in your browser and
forms that manipulate your data with full CRUD.

Your app should have two pages...

1. A page that lists all restaurants, on which a user can create a new
   restaurant.
2. A page that lists one restaurant and all its menu items, on which a user can:

- Delete the restaurant.
- Update the restaurant.
- Create a new menu item for the restaurant.
- Delete a menu item from the restaurant.

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
