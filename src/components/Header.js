import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
  const addTask = () => {
    onAdd();
  };

  const location = useLocation();
  return (
    <header className="header">
      <h1> {title} </h1>
      {location.pathname === '/' && (
        <Button
          text={showAdd ? 'Close' : 'Add'}
          color={showAdd ? 'red' : 'green'}
          onClick={addTask}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

Header.defaultProps = {
  title: 'default title'
};

// CSS in JS
// const headingStyles = {
//   color: 'red',
//   backgroundColor: 'black'
// };

export default Header;