import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: `%s Wild Oasis`,
    default: `Welcome / Wild Oasis`,
  },
  description:
    "Luxurious cabins hotel, located in the heart of the italian dolomites, surrounded by beautiful mountains and dark forests",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased  bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="w-full mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
