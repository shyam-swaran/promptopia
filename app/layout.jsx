import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/global.css";
import ReactQueryProvider from "./ReactQueryProvider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Promts",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Provider>
            <div className="main">
              <div className="gradient"></div>
            </div>

            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
