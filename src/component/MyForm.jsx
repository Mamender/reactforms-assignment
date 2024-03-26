import { useState } from 'react';

const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Handle form submission logic here
    console.log('Submitted:', inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update input value as user types
  };

  return (
    <div>
      <h2>My Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
