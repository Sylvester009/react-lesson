function Header(props) {
  return (
    <header>
      <nav className="nav">
        <img src={props.logo} alt="reactlogo" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
