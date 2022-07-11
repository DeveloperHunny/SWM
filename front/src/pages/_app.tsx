import React from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import { ChakraProvider } from "@chakra-ui/react";

import Layout from "@components/layout";

import theme from "@styles/theme";
import "../styles/globals.css";

function Pansori({ Component, pageProps, router }: AppProps) {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Layout router={router}>
					<Component {...pageProps} key={router.route} />
				</Layout>
			</ChakraProvider>
		</RecoilRoot>
	);
}

export default Pansori;
