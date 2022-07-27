import React from "react";
import "./Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../stateManagment/StateProvider";
import Order from "../components/Order";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  React.useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc?.id,
              data: doc?.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user?.uid, user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map(order => (
            <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
