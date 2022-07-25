import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { setDoc, collection } from "firebase/firestore";
import { CardElement, useStripe, useElements } from "@stripe/stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import instanse from "./axois";
import axios from "axios";
import { db } from "./firebase";

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const [disable, setDisable] = React.useState(true);
  const [clientSecret, setClientSecret] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [processing, setProcessing] = React.useState("");
  const [succeeded, setSucceeded] = React.useState(false);

  // useEffect(() => {
  //   //generate stripe secret which alow us to charge customer
  //   const getClientSecret = async () => {
  //     const response = await axios({
  //       method: "post",
  //       //Strip expects the total in a currencies subunits
  //       url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
  //       setClientSecret(response?.data?.clientSecret)
  //     });
  //   };
  //   getClientSecret();
  // }, [basket]);
  // console.log("The secret is", clientSecret)
  // const stripe = useStripe();
  // const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    // const payload = await stripe
    //   .confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //     },
    //   })
    //   .then(({ paymentIntent }) => {
    // setDoc(db, "users", user?.uid, "orders", paymentIntent.id),
    //   {
    //     basket: basket,
    //     amount: paymentIntent.amount,
    //     created: paymentIntent.created,
    //   };

    // db.collection('users').doc(user?.id)
    // .collection('orders')
    // .doc(paymentIntent.id)
    // .set({
    //   basket: basket,
    //   amount: paymentIntent.amount,
    //   created: paymentIntent.created
    // })
    //     // paymentIntent = payment confirmation
    //     setSucceeded(true);
    //     setError(null);
    //     setProcessing(false);
    // dispatch({
    //   type: 'EMPTY_BASKET'
    // })
    //     navigate("/orders", {replace: true})
    //   });
  };

  const handleChange = (e) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">({basket?.length} Items)</Link>}</h1>
        {/* payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* payment section - Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {/* All products */}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment section payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe will go here */}
            <form onSubmit={handleSubmit}>
              {/* <CardElement onChange={handleChange} /> */}
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disable || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
