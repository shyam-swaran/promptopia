import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/global.css";
import Head from "next/head";

export const metadata = {
  title: "Promtopia",
  description: "Discover & Share AI Promts",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
