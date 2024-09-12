
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio Mustafa",
	description: "Portfolio ",
	icons: "assets/smzlogo.jpg"
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
			<title>Mustafa Portfolio</title>
        <meta name="description" content="Welcome to Mustafa's portfolio website." />
        <meta property="og:title" content="Mustafa Portfolio" />
        <meta property="og:description" content="Welcome to Mustafa's portfolio website." />
        <meta property="og:image" content="/assets/smzlogo.jpg" />
        <meta property="og:type" content="website" />
			</Head>
			<body className={inter.className}>
				<Header />
				{children}
				<Sidebar />
			</body>
		</html>
	);
}
