const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const kittySchema = new mongoose.Schema({
      name: String
    });

    kittySchema.methods.speak = function () {
      const greeting = this.name
        ? 'Meow name is ' + this.name
        : "I don't have a name";
      console.log(greeting);
    };

    const Kitten = mongoose.model('Kitten', kittySchema);

    const fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak();

    return mongoose.disconnect();
  })
  .catch((err) => {
    console.error(err);

    const kittySchema = new mongoose.Schema({
      name: String
    });

    kittySchema.methods.speak = function () {
      const greeting = this.name
        ? 'Meow name is ' + this.name
        : "I don't have a name";
      console.log(greeting);
    };

    const Kitten = mongoose.model('Kitten', kittySchema);

    const fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak();
  });


