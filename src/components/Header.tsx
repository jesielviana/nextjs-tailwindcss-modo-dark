import ThemeChanger from "./ThemeChanger";

const Header = () => {
  return (
    <header className="py-5 px-5 flex items-center justify-end">
      <div>
        <ThemeChanger />
      </div>
    </header>
  );
};
export default Header;
