import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
  const [data, setData] = useState({});
  const getData = async () => {
    const fetchedData = await fetch('/resumeData.json').then((r) => r.json());
    setData(fetchedData);
  };
  useEffect(() => {
    ReactGA.initialize('UA-137802850-1');
    ReactGA.pageview(window.location.pathname);
    getData();
  }, []);
  return (
    <div className='App'>
      {data.main ?
      <>
      <Header data={data.main} />
      <Portfolio data={data.portfolio} />
      <Contact data={data.main} />
      <About data={data.main} />
      <Footer data={data.main} />
      </>
    : null
  }
    </div>
  );
}

export default App;
