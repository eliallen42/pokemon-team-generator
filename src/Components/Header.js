export default function Header() {
  return (
    <header className="header">
      <img
        src="/pokeball.png"
        alt="pokeball"
        aria-hidden="true"
        className="header-pokeball"
      />
      <h1 className="header-title">Random Pokemon Team Selector</h1>
    </header>
  );
}
