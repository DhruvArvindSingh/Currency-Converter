import React, { useId } from "react";
import "./Input.css";

function Input({
    amount,
    onChangeamount,
    onChangecurrency,
    currencyoptions = [],
    label,
    select_currency = "usd",
    css,
}) {
    const Input_id = useId();
    return (
        <>
            <div className="top_box">
                <label htmlFor={Input_id}></label>
                <input

                    type="number"
                    min="0"
                    id={Input_id}
                    value={amount}
                    onChange={(e) => onChangeamount && onChangeamount(Number(e.target.value))}
                    className="input_value"
                    placeholder="Amount"
                />
                <select
                    id={Input_id}
                    className="select_curr"
                    onChange={(e) => {
                        console.log("set_currency_called");
                        onChangecurrency && onChangecurrency(e.target.value);
                    } }
                    value={select_currency}>
                    {
                        currencyoptions.map(
                            (curr) => (
                                <option
                                    key={curr}
                                    value={curr}
                                >
                                    {curr}
                                </option>
                            )
                        )
                    }
                </select>
            </div>
        </>
    )
}
export default Input; 