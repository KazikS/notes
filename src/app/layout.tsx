import { Header } from "@/components/layout/Header";
import { Provider } from "@/theme/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
