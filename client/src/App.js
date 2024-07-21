import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${apiUrl}/endpoint`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, [apiUrl]);

  return (
    <div>
      <h1>Data from Backend</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}

export default App;

