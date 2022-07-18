const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        mongoose.connect(process.env.DB_CNN);
        console.log('db online')
        
    } catch (error) {
        console.log(error)
        throw new Error('Error to inicialize DB')
    }
}
module.exports = {
    dbConnection
}

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));