import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [categories] = useState ([
    { name: "Chasing Clarity", description: "Portraits of people in my life" },
    { name: "Black Lines", description: "Delicious delicacies" },
    { name: "Dear Disciples", description: "MiniSota" },
  ]);
const [currentCategory, setCurrentCategory] = useState(categories[0])
const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
       {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
        ) : (
              <Contact></Contact>
         )}
    </div>
  );
}

export default App;
