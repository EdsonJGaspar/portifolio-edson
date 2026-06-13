import navLinks from "@/app/data/constants/nav-links";

export function DesktopNav() {
  return (
    <ul className="hidden lg:flex space-x-10">
      {navLinks.map((menu) => (
        <li key={menu.url}>
          <a
            href={menu.url}
            className="text-slate-200 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            {menu.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
