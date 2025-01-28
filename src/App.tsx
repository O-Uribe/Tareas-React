import { useEffect, useState } from 'react';
import SelectList from './components/SelectList';

const App = (): JSX.Element => {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/region/south america");
        const data = await response.json();
        const capitals = data.map((country: any) => country.capital?.[0]) 
        setCities(capitals.sort());
      } catch (error) {
        console.error("Error al obtener las ciudades", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div>
      <hr />
      <SelectList elements={cities} />
    </div>
  );
};

export default App;