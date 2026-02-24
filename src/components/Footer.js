function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        <span className="nowrap">Copyright &copy; {year}</span>
        <span className="nowrap"> Little Taco Shop</span>
      </p>
    </footer>
  );
}

export default Footer;