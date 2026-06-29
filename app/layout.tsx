import "./globals.css";
import { inter, indieFlower} from "../config/fonts";
const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <html lang="en" className={`${inter.variable} ${indieFlower.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
export default RootLayout;