import { useState ,useEffect} from "react";
function get_curr_info(currency) {
    console.log("use_currency_info called currency = ", currency);
    const [data, setData] = useState({});
    useEffect(() => {
        console.log("useEffect Called");
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res => res.json())
            .then(res => setData(res[currency]));
        console.log("Data =", data);
        // return () => setData();
    }, [currency]);
    console.log("After Data =", data);
    return data;
}
export default get_curr_info;