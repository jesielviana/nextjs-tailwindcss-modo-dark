import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {theme === "dark" ? (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-yellow-400"
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <MoonIcon
          className="h-6 w-6 cursor-pointer text-slate-700"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </div>
  );
};

export default ThemeChanger;
