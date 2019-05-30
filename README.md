[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# YUM!

We will be writing a node application to practice using Mongoose. Your task:
create an app that tracks and stores Restaurants and Menu Items.

We will be providing you seed data, and part of the assignment is determining
the best way to write the models. Often in the real world we engineers have
to determine the best way to integrate existing datasets with our applications, and
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

You can test your code by running `node index.js` in the Terminal.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

You'll begin by creating an app that performs CRUD functionality on a database
using Mongoose queries. You should not be using Express yet.

1. Create a `models/` directory, and create the schemas and corresponding models
   for a _restaurant_ and for _menu items_.

Looking at the seed data, it could be a good idea to treat the Menu Item model as a _nested subdocument_ of the Restaurant model.

Here's an example of this pattern (via [Mongoose Documentation](https://mongoosejs.com/docs/subdocs.html)):

```js
const childSchema = new Schema({ name: "string" });

const parentSchema = new Schema({
  // Array of subdocuments
  children: [childSchema]
});
```

2. In `db/seed.js`, write the logic to use the data in `db/seedData.json` to
   seed the database.

3. Run `node db/seed.js` to seed the database.

4. In `index.js` write a function for each of the following to add CRUD functionality to Restaurnt models. HINT: these functions should implement the Mongoose model methods:

- [ ] Create a new restaurant
- [ ] Find (aka "get") a restaurant by `name`
- [ ] Find all restaurants by `zipCode`
- [ ] Update a restaurant (any and/or all fields BESIDES items)
- [ ] Delete a restaurant

For this lab, we can test these methods by invoking them at the bottom of the `index.js` and running the file with `node index.js`. Feel free to use either `console.log` or the Mongo CLI to check the functions are working correctly.

When thinking about how to write these fuctions, consider the arguments you want to pass to each function. For example, you might only need the `restaurantName` for the "Find" method, but to "Update" you might also need another argument that has the new data you want to update...

This high-level thinking is important! Taking the time to plan what you want to do before writing the code makes the entire process go smoothly, and often organizations want to know _why_ you make decisions as much as _how_ you solve problems.

## Bonuses

### Add methods for the Menu Items

- [ ] Add a menu item from a restaurant
- [ ] Update menu item from a restaurant
- [ ] Remove a menu item a restaurant

### Add Express

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
