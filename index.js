// index.js
export default function detectCurrency() {
  const userCountryCode = window.navigator.language;
  const currencyMap = {
    "en-US": "USD",
    "en-GB": "GBP",
    "en-IN": "INR",
    "es-ES": "EUR",
    "fr-FR": "EUR",
    "de-DE": "EUR",
    "ja-JP": "JPY",
    "ko-KR": "KRW",
    "zh-CN": "CNY",
    "ru-RU": "RUB",
    "pt-BR": "BRL",
    "ar-SA": "SAR",
    "es-MX": "MXN",
    "it-IT": "EUR",
    "nl-NL": "EUR",
    "tr-TR": "TRY",
    "vi-VN": "VND",
    "th-TH": "THB",
    "id-ID": "IDR",
    "pl-PL": "PLN",
    "sv-SE": "SEK",
  };
  const defaultCurrency = "USD";
  const currency = currencyMap[userCountryCode] || defaultCurrency;

  return currency;
}
