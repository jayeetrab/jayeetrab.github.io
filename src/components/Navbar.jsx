import { useState, useEffect } from "react";

const Navbar = ({ hidden = false }) => {
  if (hidden) return null;

  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar relative z-50 py-5 flex items-center justify-between px-6 md:px-12
        
      `}
    >
      {/* Logo — text only, no image */}
      <div className="logo">
        <a href="#home" className="logo-text text-lg font-bold tracking-wide">
          My portfolio
        </a>
      </div>

      {/* Nav links — slides down from top after scroll */}
      <ul
        className={`flex items-center sm:gap-10 gap-4
          md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0
          md:opacity-100 md:pointer-events-auto
          bg-[#060d0e]/70 backdrop-blur-xl
          md:bg-transparent md:backdrop-blur-none
          px-6 py-3 rounded-b-2xl
          border-x border-b border-[#1F97A6]/20
          md:border-none
          shadow-[0_8px_32px_rgba(31,151,166,0.1)]
          md:shadow-none
          transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${active
            ? "top-0 opacity-100 pointer-events-auto"
            : "-top-14 opacity-0 pointer-events-none"
          }`}
      >
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative sm:text-sm text-xs font-medium text-zinc-300 hover:text-[#38c9d8]
                transition-colors duration-300 ease-out group"
            >
              {item}
              {/* Underline slide-in */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#1F97A6]
                group-hover:w-full transition-all duration-400 ease-out" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
