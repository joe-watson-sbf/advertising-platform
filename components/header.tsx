import Link from "next/link";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "About",
    url: "/about",
  },
];

export default function Header() {
  return (
    <header>
      <h1>Header</h1>
        <nav>
            <ul>
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.url}> {item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}
