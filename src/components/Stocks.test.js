import { render, screen } from '@testing-library/react'
import Stocks from "./Stocks";
import { userEvent } from '@testing-library/user-event'

describe("Stocks component", () => {


    test('renders Your Stocks', () => {
        render(<Stocks stocks={[]} onDelete={() => { }} />);

        const heading = screen.getByText('Your Stocks', { exact: false });
        expect(heading).toBeInTheDocument();
    })


    test('renders Changed if button was clicked', () => {
        render(<Stocks />)
        const linkElement = screen.getByRole("button")
        userEvent.click(linkElement)

        const del = screen.getByText('Delete', { exact: false });
        expect(del).toBeInTheDocument()
    })
})