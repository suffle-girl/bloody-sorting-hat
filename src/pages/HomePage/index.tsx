import "./style.css";

export const HomePage = (): JSX.Element => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Bloody Sortin' Hat</h1>
      </header>
      <main>
        <h2>Welcome, Stranger, to the Bloody Sortin' Hat!</h2>
        <p>
          A place of wonders and magic for everyone in love with the world of
          the witches and wizards.
        </p>
      </main>
    </div>
  );
};
