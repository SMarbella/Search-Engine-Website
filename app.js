import { createRoot } from 'react-dom/client';

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