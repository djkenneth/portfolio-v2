import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/main.scss";
import Footer from "../components/Footer";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "@KennethPineda",
    description: "I develop things for the web.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="wrapper">
                    <Navbar />
                        {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}