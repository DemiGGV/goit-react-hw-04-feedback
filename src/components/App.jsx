import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { MainContainer } from './MainContainer';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementField = option => {
    this.setState(pState => {
      return {
        [option]: pState[option] + 1,
      };
    });
  };

  countTotalFeedback = state => {
    return Object.values(state).reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = (total, { good }) => {
    return Math.round((good / total) * 100);
  };

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            incrementField={this.incrementField}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback(this.state) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.countTotalFeedback(this.state),
                this.state
              )}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </MainContainer>
    );
  }
}
