import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_kbmB2NplHE6ADrUYv2IBeASrm5hFxvjCKcamRLiU');

const convertCurrency = async (fromCurrency, toCurrency, units) => {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiPlayer = res.data[toCurrency];
    return multiPlayer*units;
}


export default convertCurrency;