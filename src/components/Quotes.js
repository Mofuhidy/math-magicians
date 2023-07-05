import React, { useEffect, useState } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=money';

function Quotes() {
  const [quote, setQuote] = useState();
  const [isLoading, setIsLoading] = useState('idle');
  const [hasError, setHasError] = useState(false);

  const fetchRandomQuote = async () => {
    try {
      setIsLoading('pending');
      const response = await fetch(url, {
        headers: {
          'X-Api-Key': 'tvkUus/p9WHwSOdk+kbWHA==a2jd4Ger5SzgFZAb',
        },
      });
      const jsonData = await response.json();
      setQuote(jsonData[0]);
      setIsLoading('successful');
    } catch (error) {
      setHasError(true);
      setIsLoading('rejected');
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  return (
    <div className="col-span-1 flex flex-col items-center justify-center w-3/4">
      { (isLoading === 'pending' || isLoading === 'idle' ? <p>Loading ...</p> : (
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
