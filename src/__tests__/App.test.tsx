import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

describe("App - Test", () => {
  it("should render app without crashing", () => {
    render(<App />);
  });

  it("should render titles", () => {
    render(<App />);
    expect(screen.getByText("more from rico the dog")).toBeInTheDocument();
    expect(screen.getByText("Ricobot")).toBeInTheDocument();
    expect(screen.getByText("RICO IS BACK!")).toBeInTheDocument();
  });

  it("should click on learn more", () => {
    render(<App />);
    const btnText = screen.getByText("Learn More");
    expect(btnText).toBeInTheDocument();

    const btn = screen.getByTestId("learn-more-button");
    fireEvent.click(btn);
  });

  it("should click on of image cards", () => {
    render(<App />);
    const imgCard = screen.getByTestId("image-thumbnail-1");
    expect(imgCard).toBeInTheDocument();

    fireEvent.click(imgCard);
  });
});
