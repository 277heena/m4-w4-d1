const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const fruitSchema = new mongoose.Schema({
      name: String
    });

    const Fruit = mongoose.model('Fruit', fruitSchema);

    const apple = new Fruit({ name: 'apple' });
    console.log(apple.name);

    return mongoose.disconnect();
  })
  .catch((err) => {
    console.error(err);

    const fruitSchema = new mongoose.Schema({
      name: String
    });

    const Fruit = mongoose.model('Fruit', fruitSchema);

    const apple = new Fruit({ name: 'apple' });
    console.log(apple.name);
  });
