import { useEffect, useState } from "react";
import SunIcon from "../../../assets/icons/SunIcon";
import MoonIcon from "../../../assets/icons/MoonIcon";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="group w-8 h-8 flex items-center justify-center rounded-full lg:hover:bg-white transition"
    >
      {dark ? (
        <SunIcon className="w-5 h-5 text-sunYellow lg:group-hover:text-black transition-colors" />
      ) : (
        <MoonIcon className="w-5 h-5 text-moonGrey lg:group-hover:text-black transition-colors" />
      )}
    </button>
  );
}
