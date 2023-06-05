import ThemeChanger from "./ThemeChanger";

const Header = () => {
  return (
    <header className="py-5 px-5 flex items-center justify-between">
      <h1 className="font-oswald text-2xl">Jesiel Viana</h1>
      <ThemeChanger />
    </header>
  );
};
export default Header;
