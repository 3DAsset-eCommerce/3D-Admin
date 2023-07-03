export const formatPrice = (price: number): string => {
  const currencySymbol = price < 0 ? '- \u20A9' : '\u20A9'
  const absPrice = Math.abs(price)
  return `${currencySymbol}${absPrice.toLocaleString()}`
}
