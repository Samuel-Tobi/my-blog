import { useState } from 'react';

const Home = () => {
  // let name = 'Tobi';
  const [name, setName] = useState('Tobi');
  const [age, setAge] = useState(15);

  const handleClick = () => {
    setName('Samuel');
    setAge(20);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
