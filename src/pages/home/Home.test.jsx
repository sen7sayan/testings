import { render, screen } from "@testing-library/react"
import Home from "./Home"


test("Test for home page",()=>{
    render(<Home/>)

    const heading = screen.getByRole("heading",{
        name : "Hello, I'm Sayan!"
    })

    expect(heading).toBeInTheDocument();
})