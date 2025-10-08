import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header className="border-b py-4">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/nn.svg" alt="NN Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.text} to={item.href} className="link-hover py-2">
              {item.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          <Menu className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`} />
          <X className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container mt-4 pb-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.text}
                to={item.href}
                className="py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
