import Nav from "@/components/nav";
import "./globals.css";


export const metadata = {
  title: "School landing page",
  description: "Lungani ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
