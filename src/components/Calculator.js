import React from 'react';
import Buttons from './Buttons';

const calcSymbols = ['AC', '\u00B1', '%', '\u00F7', 7, 8, 9, '\u00D7', 4, 5, 6, '\u2212', 1, 2, 3, '\u002B', 0, '\u22C5', '='];

export default function Calculator() {
  return (
    <div className=" w-1/2 h-fi bg-amber-100 rounded-lg shadow-sm">
      <div className="display text-right text-gray-700">
        <h1 className="number text-3xl pr-5 pt-5 pb-5 ">0</h1>
      </div>
      <div className="grid grid-cols-4 divide-x divide-y">
        {calcSymbols.map((el) => (el === '\u00F7' || el === '\u00D7' || el === '\u2212' || el === '\u002B' || el === '\u22C5' || el === '='
          ? <Buttons symbol={el} key={el} btnColor="bg-[#F8CBA6] text-white hover:text-gray-700 hover:bg-amber-50 " />
          : <Buttons symbol={el} key={el} btnColor="bg-amber-50 text-gray-700  hover:text-white hover:bg-[#F8CBA6]" />))}
      </div>
    </div>
  );
}
