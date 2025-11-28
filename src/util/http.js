import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();


export async function fetchStocks() {
    const response = await fetch('http://localhost:3000/stocks')

    if (!response.ok) {
        const error = new Error("An error occured while fetching data!")
        error.code = response.status
        error.info = await response.json()
        throw error;
    }
    const { stocks } = await response.json()
    return stocks
}

export async function createNewStock(stockData) {
    const response = await fetch("http://localhost:3000/stocks", {
        method: "POST",
        body: JSON.stringify(stockData),
        headers: {
            'Content-Type': "application/json"
        }
    })
    if (!response.ok) {
        const error = new Error("AN error occured while creating the stock!")
        error.code = response.status
        error.info = await response.json()
        throw error
    }
    const { stock } = await response.json()
    return stock
}


export async function fetchStock({ stockId, signal }) {
    const response = await fetch(`http://localhost:3000/stocks/${stockId}`, { signal })
    if (!response.ok) {
        const error = new Error("An error occured while fetching the stock card.")
        error.code = response.status
        error.info = await response.json()
        throw error
    }
    const { stock } = await response.json()
    return stock
}


export async function deleteStock({ id }) {
    const response = await fetch(`http://localhost:3000/stocks/${id}`, {
        method: "DELETE"
    })
    if (!response.ok) {
        const error = new Error("An error occured while deleting the stock card.")
        error.code = response.status
        error.info = await response.json()
        throw error
    }
    return response.json()
}