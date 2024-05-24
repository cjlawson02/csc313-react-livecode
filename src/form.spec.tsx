import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Form from "./form";
import { Api } from "./api";

jest.mock("./api", () => ({
  Api: {
    submitForm: jest.fn(),
  },
}));

describe("Form", () => {
  it("should render the form fields", () => {
    render(<Form />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Job")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("should call the submitForm function with the form values", async () => {
    const user = userEvent.setup();
    render(<Form />);

    const nameInput = screen.getByLabelText("Name");
    const jobInput = screen.getByLabelText("Job");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    await user.type(nameInput, "John Doe");
    expect(nameInput).toHaveValue("John Doe");
    await user.type(jobInput, "Software Engineer");
    expect(jobInput).toHaveValue("Software Engineer");
    await user.click(submitButton);

    expect(Api.submitForm).toHaveBeenCalledWith({
      name: "John Doe",
      job: "Software Engineer",
    });
  });
});
