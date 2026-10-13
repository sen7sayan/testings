import { render, screen } from "@testing-library/react"
import Sum from "./Sum"
import userEvent from "@testing-library/user-event";


describe('Sum component',()=>{
    test('sum heading',()=>{
        render(<Sum/>)
        const heading = screen.getByRole('heading', {name : 'Addition Calculator'});
        expect(heading).toBeInTheDocument();
    })


    test('1st input box',()=>{
        render(<Sum/>)
        const inputBox = screen.getByPlaceholderText('Enter first number');
        expect(inputBox).toBeInTheDocument();
    })

    test('Calculate sum of two number', async()=>{
        const user =  userEvent.setup();

        render(<Sum/>)

        const inputBox1 = screen.getByPlaceholderText('Enter first number');
        await user.type(inputBox1,"10")

        const inputBox2 = screen.getByPlaceholderText('Enter second number');
        await user.type(inputBox2,"20")

        const buttonSum = screen.getByRole("button",{name: "Calculate Sum"});
        await user.click(buttonSum);

        const ResultText = screen.getByText('Result: 30');
        expect(ResultText).toBeInTheDocument()
    })
})