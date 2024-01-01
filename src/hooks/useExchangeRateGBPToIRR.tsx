"use client";

// Cores //
import { useEffect, useState } from "react";

// Instruments //
import axios from "axios";

// Utilities //
import { irrCurrencyFormat } from "@/utils/currencyFormat";

const API_KEY = "230967b967bfa5f86ca99d6c";
const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/GBP/IRR`;

export const useExchangeRateGBPToIRR = (price: number) => {
  const [exchangePrice, setExchangePrice] = useState<number>(0);
  const hardRateExchange = 52230.27; // each Pound into Rial
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(`${URL}/${price}`);

        if (response.status === 200) {
          const data = response.data;
          const irToman = Math.floor(data.conversion_result / 1000) * 1000; // Common currency in Iran
          setExchangePrice(irToman);
        } else {
          const priceWithHardRateExchange = price * hardRateExchange;
          const irToman = Math.floor(priceWithHardRateExchange / 1000) * 1000;
          setExchangePrice(irToman);
          throw new Error();
        }
      } catch (error) {
        console.log(
          `⚠ Error: the server responded with a status of 429 () => free account has reached the number of requests allowed by the free plan, and the price exchange is based on a hard number`
        );
      }
    };
    if (price > 0) {
      // fetchExchangeRate();
      const priceWithHardRateExchange = price * hardRateExchange;
      const irToman = Math.ceil(priceWithHardRateExchange / 1000) * 1000;
      setExchangePrice(irToman);
    }
  }, [price]);

  return irrCurrencyFormat(exchangePrice);
};
