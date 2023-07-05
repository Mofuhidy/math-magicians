import React, { useEffect, useState } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=money';

function Quotes() {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchRandomQuote = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': 'tvkUus/p9WHwSOdk+kbWHA==a2jd4Ger5SzgFZAb',
          },
        });
        const jsonData = await response.json();
        setQuote(jsonData[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };

    fetchRandomQuote();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  return (
    <div className="col-span-1 flex flex-col items-center justify-center w-3/4">
      { (isLoading ? <p>Loading ...</p> : (
        <p className=" text-lg">
          {quote && quote.quote}
          {' '}
          - by
          {' '}
          {quote && quote.author}
        </p>
      ))}
    </div>
  );
}

export default Quotes;
