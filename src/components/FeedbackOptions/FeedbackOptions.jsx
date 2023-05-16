import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onIncrement }) => (
  <div className={css.feedbackOptions}>
    {options.map(option => {
      return (
        <button
          key={option}
          className={css.btn}
          type="button"
          onClick={() => {
            onIncrement(option);
          }}
        >
          {option}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
