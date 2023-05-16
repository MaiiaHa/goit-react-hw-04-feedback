import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  onStateGood,
  onStateNeutral,
  onStateBad,
  onTotal,
  onPersentage,
}) => (
  <div className="statistics">
    <p>
      Good: <span>{onStateGood}</span>
    </p>
    <p>
      Neutral: <span>{onStateNeutral}</span>
    </p>
    <p>
      Bad: <span>{onStateBad}</span>
    </p>
    <p>
      Total: <span>{onTotal}</span>
    </p>
    <p>
      Positive feedback: <span>{onPersentage} %</span>
    </p>
  </div>
);

Statistics.propTypes = {
  onStateGood: PropTypes.number.isRequired,
  onStateNeutral: PropTypes.number.isRequired,
  onStateBad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onPersentage: PropTypes.number.isRequired,
};

export default Statistics;
