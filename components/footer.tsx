const footerLink = [
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

export default function Footer() {
  return (
    <footer className="flex justify-between flex-wrap gap-4 mt-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-8xl">Footer</h1>
      </div>
      <div className="flex flex-col gap-4">

      </div>
    </footer>
  );
}
