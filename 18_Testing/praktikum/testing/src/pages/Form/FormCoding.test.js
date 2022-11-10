import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NameForm from "./FormCoding";

describe("NameForm", () => {
  test("renders NameForm component", () => {
    render(<NameForm />);

    expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Foto Surat Kesungguhan:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument();
  });

  test("input value to form", () => {
    render(<NameForm />);

    // Input full name
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "testing" } });

    // Input email
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "testing@gmail.com" } });

    // Input phone number
    fireEvent.input(screen.getByRole("spinbutton", { name: /no Handphone/i }), { target: { value: 888888888 } });

    // Input education
    fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
    fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

    // Input class
    const inputClass = screen.getByRole("combobox", { name: /kelas/i });
    userEvent.selectOptions(inputClass, "reactjs");

    // Input file
    const newFile = new File(["testing"], "testing.docx", { name: /surat Kesungguhan/i }, { type: ".docx" });
    const inputFile = screen.getByLabelText(/Foto Surat Kesungguhan:/);
    userEvent.upload(inputFile, newFile);

    // Input expectation
    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "jaya" } });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("testing");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("testing@gmail.com");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveValue(888888888);
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");
    expect(inputFile.files.length).toBe(1);
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("jaya");
  });

  test("invalid input detected", () => {
    render(<NameForm />);

    // Name contains number
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "testing1" } });
    // Invalid email
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "testinggmail.com" } });
    // Phone number length <9
    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: 8888888 } });
    // Phone number length >14
    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: 88888888 } });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("testing1");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("testinggmail.com");
    expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
  });

  test("user click reset button", () => {
    render(<NameForm />);

    // Input full name
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "testing" } });

    // Input email
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "testing@gmail.com" } });

    // Input phone number
    fireEvent.input(screen.getByRole("spinbutton", { name: /no Handphone/i }), { target: { value: 888888888 } });

    // Input education
    fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
    fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

    // Input class
    const inputClass = screen.getByRole("combobox", { name: /kelas/i });
    userEvent.selectOptions(inputClass, "reactjs");

    // Input file
    const newFile = new File(["testing"], "testing.docx", { name: /surat Kesungguhan/i }, { type: ".docx" });
    const inputFile = screen.getByLabelText(/Foto Surat Kesungguhan:/);
    userEvent.upload(inputFile, newFile);

    // Input expectation
    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "jaya" } });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("testing");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("testing@gmail.com");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveValue(888888888);
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");
    expect(inputFile.files.length).toBe(1);
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("jaya");

    // Reset button clicked
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));

    // Expect form reset to be empty value
    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("");
    expect(inputFile.value).toBe("");
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");
  });

  test("form fulfilled with errors, then user click submit button", () => {
    render(<NameForm />);

    // Input full name
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "testing1" } });

    // Input email
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "testinggmail.com" } });

    // Input phone number
    fireEvent.input(screen.getByRole("spinbutton", { name: /no Handphone/i }), { target: { value: 12345 } });

    // Input education
    fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
    fireEvent.click(screen.getByLabelText(/Non IT/), { target: { value: "Non IT" } });

    // Input class
    const inputClass = screen.getByRole("combobox", { name: /kelas/i });
    userEvent.selectOptions(inputClass, "reactjs");

    // Input file
    const newFile = new File(["testing"], "testing.docx", { name: /surat Kesungguhan/i }, { type: ".docx" });
    const inputFile = screen.getByLabelText(/Foto Surat Kesungguhan:/);
    userEvent.upload(inputFile, newFile);

    // Input expectation
    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "jaya" } });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("testing1");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("testinggmail.com");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveValue(12345);
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");
    expect(inputFile.files.length).toBe(1);
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("jaya");

    // Alert showed
    const alertFailed = jest.spyOn(window, "alert").mockImplementation();

    // Submit button clicked
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Expect alert showed after user clicked submit button
    expect(alertFailed).toHaveBeenCalledTimes(1);
  });

  test("form fulfilled with no error, then user click submit button and form reset", () => {
    render(<NameForm />);

    // Input full name
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "testing" } });

    // Input email
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "testing@gmail.com" } });

    // Input phone number
    fireEvent.input(screen.getByRole("spinbutton", { name: /no Handphone/i }), { target: { value: 888888888 } });

    // Input education
    fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
    fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

    // Input class
    const inputClass = screen.getByRole("combobox", { name: /kelas/i });
    userEvent.selectOptions(inputClass, "reactjs");

    // Input file
    const newFile = new File(["testing"], "testing.docx", { name: /surat Kesungguhan/i }, { type: ".docx" });
    const inputFile = screen.getByLabelText(/Foto Surat Kesungguhan:/);
    userEvent.upload(inputFile, newFile);

    // Input expectation
    fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "jaya" } });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("testing");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("testing@gmail.com");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveValue(888888888);
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");
    expect(inputFile.files.length).toBe(1);
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("jaya");

    // Alert showed
    const alertSuccess = jest.spyOn(window, "alert").mockImplementation();

    // Submit button clicked
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Expect alert showed after an user clicked submit button
    expect(alertSuccess).toHaveBeenCalledTimes(1);

    // Expect form reset to be empty value
    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");
    expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("");
    expect(inputFile.value).toBe("");
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");
  });
});