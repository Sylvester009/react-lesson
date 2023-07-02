function Navbar(props) {
  return (
    <header>
      <nav className="nav">
        <img src={props.logo} alt="navLogo" className="nav-logo" />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  );
}

export default Navbar;
