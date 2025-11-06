import { useEffect, useState } from "react";

export function useStock() {
    const [stocksBackend, setStocksBackend] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    useEffect(() => {
        async function fetchPlaces() {
            setIsFetching(true);

            try {
                const response = await fetch("http://localhost:3000/stocks");
                const resData = await response.json();

                if (!response.ok) {
                    throw new Error("Failed to fetch stocks.");
                }
                setStocksBackend(resData.places);
            } catch (error) {
                setError({
                    message:
                        error.message || "Could not fetch places, please try again later.",
                });
            }
            setIsFetching(false);
        }

        fetchPlaces();
    }, []);
    return { stocksBackend, isFetching, error }
}