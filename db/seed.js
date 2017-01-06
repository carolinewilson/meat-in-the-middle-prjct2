const mongoose = require('mongoose');
const config = require('../config/config');
const User = require('../models/user');
// const path       = require('path');
const mongoUri = process.env.MONGODB_URI || config.db;

mongoose.connect(mongoUri);

// Clear the collection so we don't get duplicates
User.collection.drop();

// Using an array & .create
const users = [
  {
    name: 'Caroline Wilson',
    lat: 51.5254678,
    lng: -0.0818591,
    address: 'Shoreditch',
    username: 'Caroline',
    email: 'caroline@example.com',
    friends: [{
      name: 'Elliot Brock',
      address: 'Whitechapel Rd, London E1, UK',
      lat: 51.518343,
      lng: -0.06309090000002016
    }],
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    name: 'Demo',
    lat: 51.5199128,
    lng: -0.0772997,
    address: 'Bleecker Street',
    username: 'Demo',
    email: 'demo@meet.com',
    friends: [{
      name: 'Caroline Wilson',
      address: 'Kingsland Rd, London E8, UK',
      lat: 51.5254678,
      lng: -0.0818591
    },{
      name: 'Elliot Brock',
      address: 'Whitechapel Rd, London E1, UK',
      lat: 51.518343,
      lng: -0.06309090000002016
    },{
      name: 'Curtis Osano',
      address: 'Teddington, Greater London, UK',
      lat: 51.4268,
      lng: -0.3313
    }],
    password: 'password',
    passwordConfirmation: 'password'
  }
];

users.forEach((user) => {
  User.create(user, (err, user) => {
    if (err) {
      console.log('Populating users failed:', err);
    } else {
      console.log(`${user} was saved.`);
    }
  });
});

mongoose.connection.close();
