import { useState, useEffect } from "react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "courses", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-transparent fixed z-50 flex w-svw items-center justify-between px-10 py-2 2xl:px-28 2xl:py-4">
      {/* logo */}
      <img className="h-10" src="/src/assets/the bridge logo.png" alt="Logo" />
      {/* navigation items */}
      <div className="flex w-96 justify-between text-xs 2xl:text-sm text-white/50">
        <button
          onClick={() => scrollToSection("home")}
          className={`transition-colors hover:text-white ${
            activeSection === "home" ? "text-myYellow" : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("courses")}
          className={`transition-colors hover:text-white ${
            activeSection === "courses" ? "text-myYellow" : ""
          }`}
        >
          Courses
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`transition-colors hover:text-white ${
            activeSection === "contact" ? "text-myYellow" : ""
          }`}
        >
          Contact
        </button>
      </div>
    </div>
  );
};
