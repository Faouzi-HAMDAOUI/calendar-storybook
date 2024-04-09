import React from 'react';
import PropTypes from 'prop-types';

/**
 * composant qui permet de selectionner une date
 * ## Usage
 * <FieldsCalendar value={value} size="small" name="date"  />
 */
export const FieldsCalendar = ({value, size, name, onchange}) => {
  return (
    <div>
      <input type="date" placeholder="selectionner une date" />
    </div>
  );
}

FieldsCalendar.propTypes = {
  value: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  name: PropTypes.string.isRequired,
  onchange: PropTypes.func
};

FieldsCalendar.defaultProps = {
  value: 'valeur string',
  size: 'medium',
  name: 'name of fields',
  onchange: 'handleChange'
};
