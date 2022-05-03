import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mercadopago from 'mercadopago';

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors())
mercadopago.configure({
    access_token: 'TEST-5342932978769833-042521-0cacc14651c458e5d47698c4e2e59d24-481851685'
});

let orders = [{
            title: "",
            unit_price: 0,
            quantity: 1,
}]

// let example = [{
//   title: 'Producto',
//   unit_price: 100,
//   quantity: 1,
// }]

let preference = {
  items: [],
  back_urls: {
    success: "http://localhost:3000/feedback",
    failure: "http://localhost:3000/feedback",
    pending: "http://localhost:3000/feedback",
  },
  auto_return: "approved",
};

app.get('/orders', (req, res) => {
    res.send(orders);
})

app.post('/order', (req, res) => {
    const order = req.body;

    // orders.push(order)
    orders[0].title = orders[0].title + ', ' + order.title
    orders[0].unit_price = orders[0].unit_price + order.unit_price

    console.log(orders);
    res.send("Order created");
})
app.post('/pay', (req, res) => {
  addOrdertoPreferences(orders);
  endPayment();
  res.send(preference);
})

function addOrdertoPreferences(order) {
  preference.items = [];
  preference.items = order;
  orders = [{
    title: "",
    unit_price: 0,
    quantity: 1,
  }]
  // console.log(preference);
}
function endPayment() {
  mercadopago.preferences.create(preference).then(function(response) {
    preference = response.response;
  });

}

app.get('/checkout/preference', (req, res) => {
  res.send(res.status(200).json(preference));
});

app.get("/checkout/preferences", (req, res) => {
  let createPref = mercadopago.preferences
  res.send(res.status(200).json(createPref));
})

app.get('/', (req, res) => {
    res.send('MP DB');
});
app.all('/*', (req, res, next) => {
    res.send('That route does not exist!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

