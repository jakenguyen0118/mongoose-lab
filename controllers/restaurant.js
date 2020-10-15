const mongoose = require('../db/connection')
const Yum = require('../models/yum')

const db = mongoose.connection

const newRestaurant = {
	name: 'Restaurant 1',
	address: {
		street: '1286 Restaurant Street',
		zipcode: '02148',
	},
	yelp: 'http://www.yelp.com/biz/restaurant-1',
	items: [{ title: 'mac and cheese' }, { title: 'tiramisu cake' }],
}

const createRestaurant = () => {
    Yum.create(newRestaurant, (err, restaurant) => {
        if (err) {
            console.log('error', err)
        } else {
            console.log('restaurant', restaurant)
        }
        db.close()
    })
}

// createRestaurant()

const findByName = () => {
    Yum.find({name: 'Restaurant 1'}, (err, name) => {
        console.log('name', name)
        db.close()
    })
}

// findByName()

const findByZipcode = () => {
	Yum.find({ "address.zipcode": 20036 }, (err, zipcode) => {
		console.log('name', zipcode)
		db.close()
	})
}

// findByZipcode()

const updateOne = () => {
    Yum.findOneAndUpdate({name: 'Restaurant 1'},
    {name: 'Restaurant 2', address: {street: '200 Restaurant Lane', zipcode: 22222}, yelp: 'no yelp'})
        .then(updated => console.log('updated', updated))
        .catch(err => console.log(err))
        .finally(() => db.close())
}

// updateOne()

const deleteOne = () => {
    Yum.deleteOne({name: 'Restaurant 1'})
        .then(deleted => console.log('deleted', deleted))
        .catch(err => console.log(err))
        .finally(() => db.close())
}

// deleteOne()