import PropTypes from 'prop-types';
import { ContainerCSS, Button } from '../MainContainer';

export function FeedbackOptions({ options, incrementField }) {
  return (
    <ContainerCSS>
      {Object.keys(options).map((option, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => incrementField(option)}
        >
          {option}
        </Button>
      ))}
    </ContainerCSS>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  incrementField: PropTypes.func.isRequired,
};
