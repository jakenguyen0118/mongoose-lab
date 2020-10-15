[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# YUM!

We will be writing a node application to practice using Mongoose. Your task:
create an app that tracks and stores Restaurants and their menu items.

We will be providing you seed data, and part of the assignment is determining
the best way to write the models. Often in the real world we engineers have
to determine the best way to integrate existing datasets with our applications, and
today we are fortunate in that we have full freedom to make our Models work with
our data.

## Prerequisites

- Express
- MongoDB
- Mongoose

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Install dependencies.
4. Fulfill the listed requirements.

## Requirements

You'll begin by creating an app that performs CRUD functionality on a database
using Mongoose queries. You should `NOT` be using Express yet.

### DB Connection

Setup the `connection` to the db which connects to a db called `yum` and all other supporting code. 

### Models
Create a `models/` directory, and create the schemas/model for a `restaurant` using the structure of the objects in the seedData.json file as your guide. 

### Seeding Data

In `db/seed.js`, import  `db/seedData.json` and write the logic to create the initial seed data and populate the db. Make sure to run the file and confirm the data has been created. 

Update `package.json` to include a new `db:seed` startup script. 

### Controllers 

Create a `controllers` directory and a `restaurant.js` file.  Write a function for each of the following to add CRUD functionality to Restaurant model. 


- [ ] Create a new restaurant
- [ ] Find (aka "get") a restaurant by `name`
- [ ] Find one of the restaurants by `zipCode` (just try one of the zipcodes from the JSON seeding data)
- [ ] Update a restaurant (any and/or all fields BESIDES items)
- [ ] Delete a restaurant

For this lab, you can test these function by invoking them in the controllers file to confirm them work. 

When thinking about how to write these functions, consider the arguments you want to pass to each function. For example, you might only need the `restaurantName` for the "Find" method, but to "Update" you might also need another argument that has the new data you want to update.


### Bonus - Add Express

Turn YUM into an Express API with routes that return data based on a url. This means creating a `server.js` file and setting up express.

| **URL** | **HTTP Verb** | Action |
|------------|-------------|-------------|
| /restaurants      | GET       |  it should get all restaurants from the db and return them as json
| /restaurants        | POST       |  it should add a new restaurant to the db and return the entire list as json
| /restaurants /:id      | GET       | it should get that individual restaurant to the db  and return as json
| /restaurants /:id      | PUT       | it should update the individual restaurant to the db  and return as it json
| /restaurants /:id      | DELETE      | it should delete the individual restaurant to the db  and return the entire list as json 


## Super Bonus - Nested Documents

Looking at the seed data, it might be a good idea to create a new `Menu Item` model as a `nested subdocument` of the `Restaurant` model.  Several menu items are servered in multiple restaurants and having a single reference to them would allow for a single point of reference if they ever needed to be updated. 

Here's an example of this pattern (via [Mongoose Documentation](https://mongoosejs.com/docs/subdocs.html)):

```js
const childSchema = new Schema({ name: "string" });

const parentSchema = new Schema({
  // Array of subdocuments
  children: [childSchema]
});
```
