import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'label' | 'ellipsis' | 'link' | 'loading';
  spinnerColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  variant,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const variantClass = variant === 'ellipsis' ? 'storybook-button--ellipsis' :
                      variant === 'link' ? 'storybook-button--link' :
                      variant === 'loading' ? 'storybook-button--loading' : '';
  return (
    <button
      type={variant === 'link' ? 'button' : 'submit'}
      className={['storybook-button', `storybook-button--${size}`, mode, variantClass].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {variant === 'loading' ? (
        <>
        <div className="loading-content">
          <div className="spinner"></div>
          <span>Loading</span>
        </div>
        </>
      ) : (
        label
      )}
    </button>
  );
};

