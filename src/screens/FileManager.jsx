import React from "react";
import { Container, Typography, Alert, Box } from "@mui/material";
import { FileBrowser } from "../components/storage/FileBrowser";

export default function FileManager() {
	return (
		<Container maxWidth={false} disableGutters>
			<Box sx={{ p: 4, width: "100%" }}>
				<Typography variant='h4' sx={{ mb: 4, fontWeight: "bold" }}>
					File Manager
				</Typography>
				<FileBrowser companyId={activeCompanyId} />
			</Box>
		</Container>
	);
}
