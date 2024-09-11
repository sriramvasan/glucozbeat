// components/SearchComponent.tsx
import { useState } from 'react';

interface SearchProps {
  onSearch: (foodName: string) => void;
}

const SearchComponent = ({ onSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="mt-2 bg-purple-500 text-white py-2 px-4 rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
