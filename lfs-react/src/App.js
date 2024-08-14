import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function App() {
	const [issues, setIssues] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchIssues = async () => {
			try {
				const response = await axios.get(
					"https://api.github.com/repos/treeverse/lakeFS/issues"
				);
				setIssues(response.data);
				setLoading(false);
			} catch (err) {
				setError("Error fetching issues");
				setLoading(false);
			}
		};

		fetchIssues();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className='App'>
			<div className='header'>
				<h1>lakeFS GitHub Issues</h1>
			</div>
			<div className='container'>
				{issues.map((issue) => (
					<Accordion className='accordion'>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1-content'
							id='panel1-header'
							key={issue.id}
						>
							<span>#{issue.number}</span> {issue.title}
						</AccordionSummary>
						<AccordionDetails>{issue.body}</AccordionDetails>
					</Accordion>
				))}
			</div>
			<footer>
				<small>
					by
					<a href='https://monacodelisa.com' target='_blank' rel="noreferrer">
						Esther White 
					</a>
					| 08/14/2024
				</small>
			</footer>
		</div>
	);
}

export default App;
