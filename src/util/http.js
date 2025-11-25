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