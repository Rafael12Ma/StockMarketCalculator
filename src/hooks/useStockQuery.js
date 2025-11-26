// useStocksQuery.js
import { useQuery } from "@tanstack/react-query";
import { fetchStocks } from "../util/http";

export function useStocksQuery() {
    return useQuery({
        queryKey: ["stocks"],
        queryFn: fetchStocks,
        gcTime: 18000000,
    });
}
