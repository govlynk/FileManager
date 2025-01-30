import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import theme from "./theme";
import Layout from "./components/storage/Layout";
import FileManager from "./screens/FileManager";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";

export default function App() {
	const [isAuthorized, setIsAuthorized] = useState(false);

	useEffect(() => {
		Amplify.configure(outputs);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Authenticator>
				{({ signOut, user }) => {
					const groups = user?.getSignInUserSession()?.getAccessToken()?.payload["cognito:groups"] || [];
					const authorized = groups.some((g) => ["GOVLYNK_ADMIN", "GOVLYNK_USER"].includes(g));

					if (!authorized) {
						return <div>Unauthorized access</div>;
					}

					return (
						<BrowserRouter>
							<Layout signOut={signOut} user={user}>
								<Routes>
									<Route path='/files/*' element={<FileManager user={user} />} />
									<Route path='/' element={<Navigate to='/files' replace />} />
								</Routes>
							</Layout>
						</BrowserRouter>
					);
				}}
			</Authenticator>
		</ThemeProvider>
	);
}
