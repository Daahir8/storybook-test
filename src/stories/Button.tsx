import React, { useState } from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'large';
  label: string;
  onClick?: () => void;
  variant?: 'label' | 'ellipsis' | 'link' | 'loading';
}

export const Button = ({
  primary = false,
  size = 'large',
  backgroundColor,
  label,
  variant,
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
  // Determine button variant class
  const variantClass =
    variant === 'ellipsis'
      ? 'storybook-button--ellipsis'
      : variant === 'link'
      ? 'storybook-button--link'
      : variant === 'loading'
      ? 'storybook-button--loading'
      : '';

  // Define button style based on click and hover states
  const buttonStyle = {
    backgroundColor: isClicked ? 'red' : isHovered ? 'lightcoral' : 'blue',
  };

  return (
    <button
      type={variant === 'link' ? 'button' : 'submit'}
      className={['storybook-button', `storybook-button--${size}`, mode, variantClass].join(' ')}
      style={{ ...buttonStyle, backgroundColor }} // Apply button style
      onMouseEnter={handleHover} // Handle mouse enter event
      onMouseLeave={handleHoverLeave} // Handle mouse leave event
      onClick={handleClick} // Handle click event
      {...props}
    >
      {variant === 'loading' ? (
        <div className="loading-content">
          <div className="spinner"></div>
          <span>Loading</span>
        </div>
      ) : (
        label // Display button label
      )}
    </button>
  );
};
