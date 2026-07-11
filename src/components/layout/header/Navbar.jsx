import React from "react";
import Container from "../Container";
import Link from "next/link";

function Navbar() {
  const navData = [
    { id: 1, title: "HOME", link: "#" },
    {
      id: 2,
      title: "COLLECTION",
      link: "#",
    },
    {
      id: 3,
      title: "JOURNAL",
      link: "#",
    },
    {
      id: 4,
      title: "LOOKBOOK",
      link: "#",
    },
    {
      id: 5,
      title: "PAGES",
      link: "#",
    },
  ];

  return (
    <nav className="bg-primary hidden lg:block">
      <Container>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-10 py-4">
            {navData.map((item) => (
              <li
                key={item.id}
                className="text-white font-medium text-sm cursor-pointer after:content-[''] after:block after:w-2/6 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5 text-white font-medium text-sm">
            <button className="cursor-pointer">SPECIAL OFFER</button>
            <button className="cursor-pointer">PURCHASE THEME</button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
