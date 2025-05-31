import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

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