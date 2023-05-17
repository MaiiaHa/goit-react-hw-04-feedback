//=============== hooks==============

import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from './Section';
import Notification from './Notification';

const initialState = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [state, setState] = useState(initialState);
  const { good, neutral, bad } = state;

  const increaseIncrement = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((prev, curr) => prev + curr, 0);
  };
  const countTotal = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return good > 0 ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };

  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        paddingLeft: 20,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(state)}
          onIncrement={increaseIncrement}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotal > 0 ? (
          <Statistics
            onStateGood={good}
            onStateNeutral={neutral}
            onStateBad={bad}
            onTotal={countTotal}
            onPersentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
//========================================

// import React, { Component } from 'react';
// import FeedbackOptions from 'components/FeedbackOptions';
// import Statistics from 'components/Statistics';
// import Section from './Section';
// import Notification from './Notification';
// import PropTypes from 'prop-types';

// class App extends Component {
//   static defaultProps = { initialGood: 0, initialNeutral: 0, initialBad: 0 };
//   static propTypes = {
//     initialGood: PropTypes.number,
//     initialNeutral: PropTypes.number,
//     initialBad: PropTypes.number,
//   };

//   state = {
//     good: this.props.initialGood,
//     neutral: this.props.initialNeutral,
//     bad: this.props.initialBad,
//   };

//   increaseIncrement = option => {
//     this.setState(currentState => ({
//       // ...currentState,
//       [option]: currentState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((prev, curr) => prev + curr, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     // if (this.state.good === 0) {
//     //   return 0;
//     // }
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
//   };

//   render() {
//     const countTotal = this.countTotalFeedback();

//     return (
//       <div
//         style={{
//           height: '100vh',
//           // display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 18,
//           paddingLeft: 20,
//           color: '#010101',
//         }}
//       >
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onIncrement={this.increaseIncrement}
//           />
//         </Section>

//         <Section title={'Statistics'}>
//           {countTotal > 0 ? (
//             <Statistics
//               onStateGood={this.state.good}
//               onStateNeutral={this.state.neutral}
//               onStateBad={this.state.bad}
//               onTotal={countTotal}
//               onPersentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
