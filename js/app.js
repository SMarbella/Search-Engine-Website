import { createRoot } from 'react-dom/client';
import React from 'react';
import { DatePicker } from 'antd';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

function Homepage() {
return (
<div>
<h1>Welcome to My React Website</h1>
<p>This is the homepage of my first React website!</p>
</div>
);
}

export default Homepage;


function SearchButton() {
  function handleClick() {
    alert('Search feature coming soon...');
  }

  return (
    <button onClick={handleClick}>
      Search
    </button>
  );
}

const domNode = document.getElementById('button');
const root = createRoot(domNode);
root.render(<SearchButton />);