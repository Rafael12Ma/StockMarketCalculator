export const data = [{
  name: "Innodata",
  value: 77,
  quantity: 4.22,
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
  quantity: 10
}];


export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
