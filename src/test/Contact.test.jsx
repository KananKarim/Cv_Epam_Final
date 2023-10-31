import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import { FaPhone } from "react-icons/fa";

describe("Contact component", () => {
  it("renders without crashing", () => {
    const info = "Test info";
    const small = "Test small";
    const href = "Test href";

    render(<Contact Icon={FaPhone} info={info} small={small} href={href} />);

    expect(screen.getByText(info)).toBeInTheDocument();
    expect(screen.getByText(small)).toBeInTheDocument();
  });
});
