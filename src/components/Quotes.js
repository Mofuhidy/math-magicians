import React, { useState } from 'react';

function Quotes() {
  const [quote, setQuote] = useState(null);
  

  return (
    <div className="col-span-1 grid-flow-row grid place-items-center">
      <h1 className="text-lg">Quotes</h1>
      <p>{quote}</p>
    </div>
  );
}

export default Quotes;
