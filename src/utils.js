/* eslint-disable import/prefer-default-export */
export const formatCurrency = (number) => new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KSH',
}).format(number);

// The Intl.NumberFormat object helps to format the currency. Learn about it https://docs.w3cub.com/javascript/global_objects/intl/numberformat
