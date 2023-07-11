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
    <>
      <div className=" p-12 w-full flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-extrabold text-[#ffb579] drop-shadow-sm mb-7">
          Today&apos;s quote:
        </h1>
        <div className="card bg-amber-50 w-4/5 h-fit shadow-md p-5 rounded-lg flex justify-center">

          { (isLoading === 'pending' || isLoading === 'idle' ? <p className=" text-lg  sm:text-2xl my-2">Loading ...</p> : (
            <p className="text-lg sm:text-2xl my-2">
              {quote && quote.quote}
              {' '}
              - by
              {' '}
              {quote && quote.author}
            </p>
          ))}
        </div>
      </div>

    </>
  );
}

export default Quotes;
