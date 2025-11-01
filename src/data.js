export const data = [{
  name: "Innodata",
  value: 77,
  quantity: 9.586,
}, {
  name: "Calestica",
  value: 298,
  quantity: 0
}, {
  name: "Apple",
  value: 256,
  quantity: 0
}, {
  name: "Canoo",
  value: 0.001,
  quantity: 1.06
}];


export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
