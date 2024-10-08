import type { Metadata } from "next";
import localFont from "next/font/local";
import "@mantine/core/styles.css";
import { ColorSchemeScript, createTheme } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import Header from "@/components/Header";
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const MantineTheme = createTheme({
  colors: {
    dark: [
      "#C9C9C9",
      "#b8b8b8",
      "#828282",
      "#696969", // text
      "#2E3235",
      "#41454B",
      "#2E2E2E",
      "#282832",
      "#474A51", // Default value of dark theme color
      "#141414",
    ],
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My awesome app</title>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={MantineTheme}>
        <Notifications />
          <Header/>
          {children}</MantineProvider>
      </body>
    </html>
  );
}
