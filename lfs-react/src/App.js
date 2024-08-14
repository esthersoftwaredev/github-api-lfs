import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/treeverse/lakeFS/issues');
        setIssues(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching issues');
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <h1>lakeFS GitHub Issues</h1>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            <h3>#{issue.number} {issue.title}</h3>
            <p> opened by {issue.user.login}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;