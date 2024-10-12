import React, { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from './logo.svg';
import "./App.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pagination from '@mui/material/Pagination';

function App() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/repos/treeverse/lakeFS/issues?page=${page}&per_page=10`
        );
        setIssues(response.data);
        
        // Get total count from Link header
        const linkHeader = response.headers.link;
        if (linkHeader) {
          const lastPageLink = linkHeader.split(',').find(link => link.includes('rel="last"'));
          if (lastPageLink) {
            const match = lastPageLink.match(/page=(\d+)/);
            if (match) {
              setTotalPages(parseInt(match[1]));
            }
          }
        }
        
        setLoading(false);
      } catch (err) {
        setError("Error fetching issues");
        setLoading(false);
      }
    };

    fetchIssues();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='App'>
      <div className='header'>
        <h1>Open Issues</h1>
        <img src={reactLogo} className="logo" alt="React logo" />
        <h1>GitHub API</h1>
      </div>
      <div className='container'>
        {issues.map((issue) => (
          <Accordion className='accordion' key={issue.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1-content'
              id='panel1-header'
            >
              <span>#{issue.number}</span> {issue.title}
            </AccordionSummary>
            <AccordionDetails>{issue.body}</AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Pagination 
        count={totalPages} 
        page={page} 
        onChange={handlePageChange}
      />
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