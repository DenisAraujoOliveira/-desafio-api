const mongoose =  require('mongoose');

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;


mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
  {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', () => console.error('connection error:'))
mongoose.connection.once('open', () => console.log('database connected'))
module.exports = mongoose;
