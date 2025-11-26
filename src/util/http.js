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