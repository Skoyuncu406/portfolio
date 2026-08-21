import "./globals.css";

export const metadata = {
  title: "Selçuk Koyuncu | Software Developer & Project Manager",
  description:
    "Software development, project management and digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
