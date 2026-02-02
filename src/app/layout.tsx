import { Header } from "@/components/layout/Header";
import { AuthProvider } from "@/shared/store/auth";
import { Provider } from "@/shared/theme/provider";
import { Flex, Box } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <AuthProvider>
            <Flex flexDirection="column" minH="100dvh" height="100vh">
              <Header />
              <Box flex="1">{children}</Box>
            </Flex>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
