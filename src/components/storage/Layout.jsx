import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Layout({ children, signOut, user }) {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						File Manager
					</Typography>
					<Typography sx={{ mr: 2 }}>{user.attributes.email}</Typography>
					<Button color='inherit' onClick={signOut}>
						Sign Out
					</Button>
				</Toolbar>
			</AppBar>
			<Box component='main' sx={{ flexGrow: 1, bgcolor: "background.default" }}>
				{children}
			</Box>
		</Box>
	);
}
