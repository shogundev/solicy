import {useEffect, useState} from "react";
import Card from "./components/Card";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";

const App = () => {
  const [numbers, setNumbers] = useState(() => {
    const storedNumbers = localStorage.getItem('numbers');
    return storedNumbers ? JSON.parse(storedNumbers) : [];
  });
  const [isSorted, setIsSorted] = useState(true);
  const [sectionMaxHeight, setSectionMaxHeight] = useState(0);


  const generateRandomNumber = () => {
    if(numbers.length > 1000) return
    let randomNumber;
    let isUnique = false;
    while (!isUnique) {
      randomNumber = Math.floor(Math.random() * 1001);

      if (!numbers.includes(randomNumber)) {
        isUnique = true;
      }
    }

    setNumbers([...numbers, randomNumber]);
    setIsSorted(false);
  };

  const deleteNumber = (number) => {
    const updatedNumbers = numbers.filter((n) => n !== number);
    setNumbers(updatedNumbers);
    setIsSorted(false);
  };

  const sortNumbers = () => {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    setNumbers(sortedNumbers);
    setIsSorted(true);
  };

  useEffect(() => {
    localStorage.setItem('numbers', JSON.stringify(numbers));
  }, [numbers]);

  useEffect(() => {
    const calculateMaxHeight = () => {
      const screenHeight = window.innerHeight;
      const headerHeight = document.getElementById('header').offsetHeight;
      const footerHeight = document.getElementById('footer').offsetHeight;
      const maxSectionHeight = screenHeight - headerHeight - footerHeight;
      setSectionMaxHeight(maxSectionHeight);
    };
    window.addEventListener('resize', calculateMaxHeight);
    calculateMaxHeight();
    return () => {
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, []);


  return (
      <div className="grid grid-cols-6">
        <div className="col-span-4">
          <div className="flex flex-col min-h-screen">
          <Header generateRandomNumber={generateRandomNumber} sortNumbers={sortNumbers} isSorted={isSorted} />
          <main className="flex-grow grid md:grid-cols-2 overflow-y-scroll" style={{height: sectionMaxHeight}}>
              {numbers.map((number, index) => (
                  <Card key={index} number={number} onDelete={deleteNumber} />
              ))}
          </main>
          <Footer />
          </div>
        </div>
        <Sidebar/>
      </div>
  );
};


export default App;
