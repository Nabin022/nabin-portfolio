const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t bg-muted/30 relative z-10">
      <div className="section-container text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Nabin. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Made with ❤️ by Nabin
        </p>
      </div>
    </footer>
  );
};

export default Footer;
