import { Global } from "@emotion/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "../src/components/commons/layout";

import reset from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Layout>
				<Global styles={reset} />
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
