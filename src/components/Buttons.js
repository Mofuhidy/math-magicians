import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ symbol, btnColor }) {
  const regularClass = `py-4  ${btnColor}`;
  const uniqueClass = `py-4 col-span-2 ${btnColor}`;
  return (

    symbol === 0
      ? <button type="button" className={uniqueClass}>{symbol}</button>
      : <button type="button" className={regularClass}>{symbol}</button>

  );
}

Buttons.propTypes = {
  symbol: PropTypes.isRequired,
  btnColor: PropTypes.isRequired,
};

export default Buttons;
