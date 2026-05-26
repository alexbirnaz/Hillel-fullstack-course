import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("shows loading", () => {
    vi.spyOn(global, "fetch").mockImplementation(() => new Promise(() => {}));
    render(<UserProfile />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows user data", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ name: "John", email: "john@mail.com" }),
    });

    render(<UserProfile />);

    await waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(screen.getByText("john@mail.com")).toBeInTheDocument();
    });
  });

  it("shows error", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
    });

    render(<UserProfile />);

    await waitFor(() => {
      expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument();
    });
  });
});
