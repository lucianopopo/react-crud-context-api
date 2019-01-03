import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextAreaGroup = ({ label, name, value, rows, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        className={classnames('form-control', {
          'is-invalid': error
        })}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TextAreaGroup;
