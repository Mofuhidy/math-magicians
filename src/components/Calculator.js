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
    <div className=" w-1/2 h-fi bg-amber-100 rounded-lg shadow-md col-span-1 ">
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
  );
}
