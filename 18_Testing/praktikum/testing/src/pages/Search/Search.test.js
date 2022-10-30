import React from "react";
import axios from "axios";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

jest.mock("axios");

describe("Search", () => {
  test("fetch stories from API and display them", async () => {
    const stories = [
      { objectId: 1, title: "Testing" },
      { objectId: 2, title: "JavaScript" },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    render(<Search />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    })

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  test("fetch stories from API and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<Search />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    })
  
    const items = await screen.findByText("Ada yang error ...");

    expect(items).toBeInTheDocument();
  });

  test("Testing onChange", () => {
    render(<Search />);
    const inputCerita = screen.getByRole("textbox", { name: "" });
    fireEvent.input(inputCerita, {
      target: { value: "Cerita 1" },
    });
    
    expect(inputCerita).toHaveValue("Cerita 1");
  });
});