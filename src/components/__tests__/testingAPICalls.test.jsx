import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import TestingAPICalls from "../testingAPICalls";
import * as services from "../../services/userService";

test("Fetch Data API called", async () => {
  const mockFetchData = jest
    .spyOn(services, "FetchData")
    .mockImplementation(async () => {
      return [
        {
          name: "kunal",
        },
      ];
    });

  render(<TestingAPICalls />);
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/kunal/i)).toBeInTheDocument();
  });
});
