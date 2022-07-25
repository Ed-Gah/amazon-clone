import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./Subtotal.css";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    const calculateValue = async () => {
      let tot = 0;
      await basket?.forEach((doc) => {
        tot += tot + doc.price;
        setVal(tot);
      });
    };
    calculateValue();
  }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>${val}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={val}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => navigate("/payment", { replace: true })}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
