import { chakraSystem } from "@/styles/chakra-theme";
import "@/styles/globals.css";
import StyledComponentsRegistry from "@/styles/styled-components.registry";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <ChakraProvider value={chakraSystem}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StyledComponentsRegistry>
  );
}
