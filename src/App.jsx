import React, { useState, onEffect } from "react";
import Input from "./components/Input"
import get_curr_info from "./Hooks/get_curr_info/";
import "./App.css";

function App() {
  const [from, setfrom] = useState(0);
  const [to, setto] = useState(0);
  const [from_curr, setfrom_curr] = useState("usd");
  const [to_curr, setto_curr] = useState("inr");
  function covert_currency() {
    setto(from * currency_data[to_curr]);
  }
  console.log("from_curr", from_curr);
  console.log("to_curr", to_curr);
  let currency_data = get_curr_info(from_curr);
  console.log("currency_data", currency_data);
  let options = Object.keys(currency_data);
  // console.log("value = ", JSON.stringify(value));
  return (
    <>
      <div className="main_body">
        <div className="outer_box">
          <div className="inner_box">
            <Input
              label="From"
              amount={from}
              onChangeamount={(from) => (setfrom(from))}
              onChangecurrency={(from_curr) => (setfrom_curr(from_curr))}
              select_currency={from_curr}
              currencyoptions={options}
            />
            <Input
              amount={to}
              onChangeamount={(to) => (setto(to))}
              onChangecurrency={(to_curr) => (setto_curr(to_curr))}
              select_currency={to_curr}
              label="To"
              currencyoptions={options}
            />

            <div className="bottom_box" onClick={() => covert_currency()}>CONVERT</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
