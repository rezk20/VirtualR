import Logo from "./../assets/logo.png";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "./../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function togelNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl border-b border-neutral-700/80">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex justify-center items-center space-x-1">
          <img className="w-10" src={Logo} alt="Logo" />
          <h1 className="font-bold text-lg">
            Virtual{" "}
            <span className="bg-gradient-to-r from-orange-800 to-orange-500 text-transparent bg-clip-text">
              R
            </span>
          </h1>
        </div>
        <ul className="hidden lg:flex justify-center items-center space-x-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="duration-200 hover:text-orange-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex">
          <Button name={"Login"} />
        </div>

        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={togelNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed right-0 z-20 backdrop-blur-xl w-full p-10 flex flex-col justify-center items-center lg:hidden">
          <ul className="space-y-5 flex flex-col items-center ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}

            <Button name={"Login"} />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
