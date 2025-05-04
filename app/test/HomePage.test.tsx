import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "@/app/page";
import { act } from "react-dom/test-utils";

// Mock framer-motion propre (pas de JSX inline)
jest.mock("framer-motion", () => ({
  motion: {
    div: (props: any) => {
      const React = require("react");
      return React.createElement("div", props);
    },
    li: (props: any) => {
      const React = require("react");
      return React.createElement("li", props);
    },
  },
  useInView: () => true,
}));

// Mock next/image propre
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const React = require("react");
    return React.createElement("img", props);
  },
}));

// Mock window dimensions et listeners
beforeAll(() => {
  Object.defineProperty(window, "innerWidth", { writable: true, value: 1024 });
  Object.defineProperty(window, "innerHeight", { writable: true, value: 768 });
  window.addEventListener = jest.fn();
  window.removeEventListener = jest.fn();
});

describe("HomePage Rendering", () => {
  it("renders hero section correctly", () => {
    render(<HomePage />);
    expect(screen.getByText("Stephane")).toBeInTheDocument();
    expect(screen.getByText("Niyonizigiye")).toBeInTheDocument();
    expect(
      screen.getByText("Software & Geospatial Developer | AI/ML Enthusiast")
    ).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(<HomePage />);
    ["Experience", "Projects", "Skills", "Contact"].forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders about me section", () => {
    render(<HomePage />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(
      screen.getByText(/Computer Engineering graduate/)
    ).toBeInTheDocument();
  });

  it("renders experiences section", () => {
    render(<HomePage />);
    [
      "Web Developer",
      "System Analyst",
      "Component Engineer",
      "IT Specialist",
      "Process Assistant",
      "Web Administrator",
    ].forEach((job) => {
      expect(screen.getByText(job)).toBeInTheDocument();
    });
  });

  it("renders education section", () => {
    render(<HomePage />);
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("University of Ottawa")).toBeInTheDocument();
    expect(
      screen.getByText("Bachelor of Computer Engineering")
    ).toBeInTheDocument();
    expect(screen.getByText("2021-2025")).toBeInTheDocument();
  });

  it("renders projects section", () => {
    render(<HomePage />);
    [
      "Geospatial Data Visualization Platform",
      "RAG-Enhanced Document Search System",
      "Computer Vision Object Detection",
      "Multilingual Web Application",
    ].forEach((project) => {
      expect(screen.getByText(project)).toBeInTheDocument();
    });
  });

  it("renders skills section", () => {
    render(<HomePage />);
    [
      "Cloud & Infrastructure",
      "Programming",
      "Web Development",
      "Databases",
      "AI & Machine Learning",
      "GIS & Spatial",
      "Tools & Practices",
      "Languages",
    ].forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders contact section", () => {
    render(<HomePage />);
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
    expect(
      screen.getByText("stephaneniyonizigiye@gmail.com")
    ).toBeInTheDocument();
    expect(screen.getByText("LinkedIn Profile")).toBeInTheDocument();
  });
});

describe("Navigation Behavior", () => {
  it("scrolls to correct sections on nav click", () => {
    const scrollIntoViewMock = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    render(<HomePage />);

    const experienceLink = screen.getAllByText("Experience")[0];
    fireEvent.click(experienceLink);
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });

  it("contact buttons have correct links", () => {
    render(<HomePage />);
    const emailLink = screen.getByText("stephaneniyonizigiye@gmail.com");
    expect(emailLink.closest("a")).toHaveAttribute(
      "href",
      "mailto:stephaneniyonizigiye@gmail.com"
    );

    const linkedInLink = screen.getByText("LinkedIn Profile");
    expect(linkedInLink.closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/stephane-n-101b231b7"
    );
    expect(linkedInLink.closest("a")).toHaveAttribute("target", "_blank");
    expect(linkedInLink.closest("a")).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });
});

describe("Other Behavior", () => {
  it("toggles mobile menu", () => {
    render(<HomePage />);
    const menuButton = screen.getByRole("button");
    fireEvent.click(menuButton);

    const navLinks = screen.getAllByText("Experience");
    expect(navLinks.length).toBeGreaterThan(1);

    fireEvent.click(menuButton);
    waitFor(() => {
      const navLinksAfterClose = screen.getAllByText("Experience");
      expect(navLinksAfterClose.length).toBe(1);
    });
  });

  it("navbar changes style on scroll", async () => {
    render(<HomePage />);
    const navbar = document.querySelector("nav");
    expect(navbar).toHaveClass("bg-transparent");

    act(() => {
      Object.defineProperty(window, "scrollY", { value: 50, writable: true });
      window.dispatchEvent(new Event("scroll"));
    });

    await waitFor(() => {
      expect(navbar).toHaveClass("bg-black/30");
    });
  });
});
