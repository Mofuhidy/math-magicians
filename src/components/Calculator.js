import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const calcSymbols = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

export default function Calculator() {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleOnClick = (e) => {
    const buttonName = e.target.innerText;
    setCalculator(calculate(calculator, buttonName));
  };

  const { total, next, operation } = calculator;

  return (
    <div className="flex p-10 sm:pb-16 items-center flex-col sm:flex-row justify-center">
      <h1 className="sm:w-1/2 w-4/5 sm:text-7xl font-extrabold text-5xl">
        Let
        <span className="text-[#ffb579]">&rsquo;</span>
        s do some math
        <span className="text-[#ffb579]">!</span>
      </h1>

      <div className="sm:w-1/2 flex sm:justify-end justify-center w-full mt-10">
        <div className=" h-fi bg-amber-100 rounded-lg shadow-md w-2/3">
          <div className="display text-right text-gray-700">
            <h1 className="number text-3xl pr-5 pt-5 pb-5 ">
              {total || next || operation || 0}
            </h1>
          </div>
          <div className="grid grid-cols-4 divide-x divide-y">
            {calcSymbols.map((el) => (el === 'x' || el === '÷' || el === '+' || el === '-' || el === '.' || el === '='
              ? <Buttons symbol={el} key={el} btnColor="bg-[#F8CBA6] text-white hover:text-gray-700 hover:bg-amber-50 " handleOnClick={handleOnClick} />
              : <Buttons symbol={el} key={el} btnColor="bg-amber-50 text-gray-700  hover:text-white hover:bg-[#F8CBA6]" handleOnClick={handleOnClick} />))}
          </div>
        </div>
      </div>
    </div>
  );
}
