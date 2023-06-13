import PropTypes from 'prop-types';
import { Title } from '../MainContainer';

export function Section({ title, children }) {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
