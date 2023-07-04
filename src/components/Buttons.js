import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ symbol, btnColor, handleOnClick }) {
  const regularClass = `py-4  ${btnColor}`;
  const uniqueClass = `py-4 col-span-2 ${btnColor}`;
  return (

    symbol === 0
      ? <button type="button" className={uniqueClass} onClick={handleOnClick}>{symbol}</button>
      : <button type="button" className={regularClass} onClick={handleOnClick}>{symbol}</button>

  );
}

Buttons.propTypes = {
  symbol: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  btnColor: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Buttons;
