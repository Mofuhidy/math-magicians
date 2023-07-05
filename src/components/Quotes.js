import React, { useEffect, useState } from 'react';

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchRandomQuote = async () => {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': 'tvkUus/p9WHwSOdk+kbWHA==a2jd4Ger5SzgFZAb',
        },
      });
      const jsonData = await response.json();
      setQuote(jsonData[0].quote);
      setIsLoading(false);
    };
    fetchRandomQuote();
  }, []);

  return (
    <div className="col-span-1 flex flex-col items-center justify-center w-3/4">
      { (isLoading ? <p>Loading ...</p> : <p>{quote}</p>)}
    </div>
  );
}

export default Quotes;
