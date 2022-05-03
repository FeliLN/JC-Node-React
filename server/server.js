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
            quantity: 0,
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
    orders[0].quantity = orders[0].quantity + order.quantity
    addOrdertoPreferences(order);
    res.send("Order created");
})
app.post('/pay', (req, res) => {
  endPayment();
  res.send(preference);
})

function addOrdertoPreferences(order) {
  preference.items.push(order)
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



// app.post("/process-payment", (req, res) => {
  //   mercadopago.configurations.setAccessToken('TEST-d04550e2-5c20-4213-b424-c12f4eb2683b');
  //   const payment_data = {
  //       transaction_amount: req.body.transaction_amount,
  //       token: req.body.token,
  //       description: req.body.description,
  //       installments: Number(req.body.installments),
  //       payment_method_id: req.body.paymentMethodId,
  //       issuer_id: req.body.issuer,
  //       payer: {
  //           email: req.body.payer.email,
  //           identification: {
  //               type: req.body.payer.docType,
  //               number: req.body.payer.docNumber,
  //           },
  //       },
  //   };
  
  //   mercadopago.payment
  //       .save(payment_data)
  //       .then((response) => {
  //           return res.status(response.status).json({
  //               status: response.body.status,
  //               status_detail: response.body.status_detail,
  //               id: response.body.id,
  //           });
  //       })
  //       .catch((err) => {
  //           return res.status(500).send(err);
  //       });
  // });


  
//PAYMENT
// app.post("/api/pay", async (req, res) => {
//   const ids = req.body;
//   const productsCopy = await repository.read();

//   let preference = {
//     items: [],
//     back_urls: {
//       success: "http://localhost:3000/feedback",
//       failure: "http://localhost:3000/feedback",
//       pending: "http://localhost:3000/feedback",
//     },
//     auto_return: "approved",
//   };
//   let error = false;
//   ids.forEach((id) => {
//     const product = productsCopy.find((p) => p.id === id);
//     if (product.stock > 0) {
//       product.stock--;
//       preference.items.push({
//         title: product.name,
//         unit_price: product.price,
//         quantity: 1,
//       });
//     } else {
//       error = true;
//     }
//   });

//   if (error) {
//     res.send("Sin stock").statusCode(400);
//   } else {
//     const response = await mercadopago.preferences.create(preference);
//     const preferenceId = response.body.id;
//     res.send({ preferenceId });
//   }
// });

// app.post('https://api.mercadopago.com/checkout/preferences', (req, res) => {
//   mercadopago.preferences.create(preference).then(function(response) {
//     preference.preference_id = response.response.id;
//     preference.collector_id = parseInt(response.response.collector_id);
//     return preference;
//   });
// });

// let createRef = mercadopago.post('/checkout/preferences', preference);



// createRef.then(function (response) {
//   console.log(response);
// }, function (error) {
//   console.log(error);
// });



// app.post("https://api.mercadopago.com/checkout/preferences", (req, res) => {

//   const { name, price } = req.body;
//   preference.items[0].title = name;
//   preference.items[0].unit_price = price; 
// })



  // mercadopago.preferences.create(preference)
  //     .then((response) => {
  //         return res.status(response.status).json({
  //             status: response.body.status,
  //             preference_id: response.body.id,
  //         });
  //     })
  //     .catch((err) => {
  //         return res.status(501).send(err);
  //     });