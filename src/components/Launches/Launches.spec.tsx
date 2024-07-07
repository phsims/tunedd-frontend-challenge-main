import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MockedProvider } from "@apollo/client/testing";
import Launches from "./Launches";
import { LAUNCHES_QUERY } from "./Launches";


// Mock Data
const mocks = [
    {
      request: {
        query: LAUNCHES_QUERY,
        variables: { limit: 6 },
      },
      result: {
        data: {
          launches: [
            {
              id: "1",
              name: "FalconSat",
              date_utc: "2006-03-24T22:30:00.000Z",
              rocket: { id: "falcon1", name: "Falcon 1" },
              links: { mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" },
              launchpad: { id: "kwajalein_atoll", name: "Kwajalein Atoll" },
            },
          ],
        },
      },
    },
  ];

describe("Launches Component", () => {
  it("should render loading state initially", () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Launches />
      </MockedProvider>
    );

    expect(getByText("Loading...")).toBeDefined();
  });

  it("should render launches when data is loaded", async () => {
   const{getByText,getByRole}= render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Launches />
      </MockedProvider>
    );

    await waitFor(() => expect(getByText("FalconSat")).toBeDefined());
    expect(getByRole('img', { name: /FalconSat/i })).toBeDefined();
  });

  it("should display an error message on error", async () => {
    const errorMocks = [
      {
        request: {
          query: LAUNCHES_QUERY,
          variables: { limit: 6 },
        },
        error: new Error("An error occurred"),
      },
    ];

   const{getByText}= render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <Launches />
      </MockedProvider>
    );

    await waitFor(() => expect(getByText(/Error:/i)).toBeDefined());
  });

  it("should open the modal with launch details when 'Details' button is clicked", async () => {
   const{getByText,getByRole}= render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Launches />
      </MockedProvider>
    );

    await waitFor(() => expect(getByText("FalconSat")).toBeDefined());

    fireEvent.click(getByRole("button", { name: /Details/i }));

    await waitFor(() => expect(getByText(/Launch date:/i)).toBeDefined());

    expect(getByText("Falcon 1")).toBeDefined();
  });


});
