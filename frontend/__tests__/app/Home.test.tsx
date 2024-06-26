import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe('Home', () => {
    it('should render "Welcome to Reimburse Bank" as main', () => {
        render(<Home />);

        const main = screen.getByRole('main');
        const welcomeStr = "Welcome to Reimburse Bank";

        expect(main).toBeInTheDocument();
        expect(main).toHaveTextContent(welcomeStr);
    })

    // TODO test main's characterisitcs such as text size, padding, bold?
})
