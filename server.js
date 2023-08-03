const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');


require('./config/connect');
require('./Midlleware/passport');


const app=express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({ secret: 'Secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', async (req, res) => { 
 res.json({ message: 'REST API' });
});

app.use('/api', require('./routers/product'));
app.use('/api', require('./routers/auth'));
app.use('/api', require('./routers/commande'));
app.use('/image',express.static('./uploads'));
// ajouter au panier
let cartItems = [];

app.get('/api/cart', (req, res) => {
  res.json(cartItems);
});


app.post('/api/cart', (req, res) => {
  const product = req.body;
  cartItems.push(product);
  res.json({ message: 'Product added to cart successfully' });
});
//





app.listen(3000,()=>{
    console.log('server work !!');
})