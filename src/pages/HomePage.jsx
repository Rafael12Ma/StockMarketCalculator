import Header from "../components/Header";
import Places from "../components/Places";
import { useStock } from "../hooks/useStock";
import Error from "../components/Error";

export default function HomePage() {
  const { stocksBackend, isFetching, error } = useStock();

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  return (
    <div id="body">
      <Header />
      <Places
        error={error}
        isLoading={isFetching}
        loadingText={"Fetching stock data..."}
        fallbackText="No stocks available!"
        stocks={stocksBackend}
      />
    </div>
  );
}
