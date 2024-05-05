import { render, screen } from '@testing-library/react';
import ButtonElement from './Button';
import * as React from 'react';

describe('Button component', () => {
  it('renders button component', () => {
    // Arrange
    render(<ButtonElement></ButtonElement>);

    // Act
    const buttonElement = screen.getByTestId('button');

    // Assert
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders button with given text', () => {
    // Arrange
    render(<ButtonElement />);

    // Act
    const buttonElement = screen.getByTestId('button');

    // Assert
    expect(buttonElement).toHaveTextContent('Go to shop');
  });
});