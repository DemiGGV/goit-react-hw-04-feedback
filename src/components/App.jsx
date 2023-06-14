import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { MainContainer } from './MainContainer';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleIncrement = item => {
    switch (item) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [bad, neutral, good]);

  const positivePercentage = Math.round(100 * (good / total));

  return (
    <MainContainer>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          incrementField={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </MainContainer>
  );
};
