# Currency Detector

A simple JavaScript function to detect the currency based on the user's country code.

## Installation

Install the package using npm:

```bash
npm install your-package-name

```

## Usage

```bash
import detectCurrency from 'your-package-name';

const currency = detectCurrency();
console.log(`Detected currency: ${currency}`);

```

## Description

The **detectCurrency** function retrieves the user's country code using window.navigator.language and maps it to the corresponding currency code using a predefined map. If the user's country code is not found in the map, it defaults to USD.

## Supported Currencies

- USD: United States Dollar
- GBP: British Pound Sterling
- INR: Indian Rupee
- EUR: Euro
- JPY: Japanese Yen
- KRW: South Korean Won
- CNY: Chinese Yuan
- RUB: Russian Ruble
- BRL: Brazilian Real
- SAR: Saudi Riyal
- MXN: Mexican Peso
- TRY: Turkish Lira
- VND: Vietnamese Dong
- THB: Thai Baht
- IDR: Indonesian Rupiah
- PLN: Polish Złoty
- SEK: Swedish Krona

## Default Currency

If the user's country code is not in the supported list, the default currency is USD.

## License

This project is licensed under the ICS License - see the LICENSE file for details.
