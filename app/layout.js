import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
