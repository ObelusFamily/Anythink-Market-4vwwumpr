const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const UserModel = require('../models/User');
const ItemModel = require('../models/Item');
const CommentModel = require('../models/Comment');
const User = mongoose.model('User');
const Item = mongoose.model('Item');
const Comment = mongoose.model('Comment');

async function seedData() {
  mongoose.connect(process.env.MONGODB_URI);

  const user = new User({
    username: faker.random.alphaNumeric(7),
    email: faker.internet.email(),
  });

  await user.save().catch((err) => console.log(err));

  const item = new Item({
    title: faker.random.word(),
    description: 'this is a test',
    image: faker.image.avatar(),
  });

  await item.save().catch((err) => console.log(err));

  const comment = new Comment({
    body: faker.random.words(),
  });

  await comment.save().catch((err) => console.log(err));
}

let promises = [];

for (let i = 0; i < 100; i++) {
  promises.push(seedData());
}

Promise.all(promises).then((res) => mongoose.disconnect());
