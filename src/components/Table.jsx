import { data, formatter } from "../data";

export default function Table() {
  //   console.log(data);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((stock) => (
          <tr key={stock.name}>
            <>
              <th>{stock.name}</th>
              <th>{formatter.format(stock.value)}</th>
              <th>{stock.quantity}</th>
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
