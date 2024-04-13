import React, { useState } from 'react';
import './button.css';

// This interface defines the props that the Button component accepts.
interface ButtonProps {
  primary?: boolean;
  large?: boolean;
  small?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'large';
  label: string;
  onClick?: () => void;
}
// This is a functional component Button that accepts props specified by the ButtonProps interface.
export const Button = ({
  primary = false,
  large= false,
  small = false,
  size = 'large',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // State to track hover state
  const [isHovered, setIsHovered] = useState(false);
  // State to track click state
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle hover event
  const handleHover = () => {
    setIsHovered(true);
  };

  // Function to handle hover leave event
  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  // Function to handle click event
  const handleClick = () => {
    // Toggle click state
    setIsClicked(!isClicked);
  };

  // Determine button mode based on primary prop
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  const modeLarge = large ? 'storybook-button--primary' : 'storybook-button--secondary';

  const modeSmall = small ? 'storybook-button--primary' : 'storybook-button--secondary';

  // Define button style based on click and hover states
  const buttonStyle = {
    backgroundColor: isClicked ? 'green' : isHovered ? 'lightcoral' : 'blue',
  };

  return (
    <button
      type="submit" 
      className={['storybook-button', `storybook-button--${size}`, mode ].join(' ')}
      style={{ ...buttonStyle, backgroundColor }} // Apply button style
      onMouseEnter={handleHover} // Handle mouse enter event
      onMouseLeave={handleHoverLeave} // Handle mouse leave event
      onClick={handleClick} // Handle click event
      {...props}
    >
      {label} {/* Display button label */}
    </button>
  );
};
