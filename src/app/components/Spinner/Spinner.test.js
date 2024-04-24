import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';
import '@testing-library/jest-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';

describe('Spinner component', () => {
  test('renders without crashing', () => {
    // Arrange
    render(
      <ThemeProvider theme={createTheme()}>
        <Spinner />
      </ThemeProvider>
    );

    // Act
    const spinnerElement = screen.getByRole('progressbar');
    const loadingText = screen.getByText('Loading...');

    // Assert
    expect(spinnerElement).toBeInTheDocument();
    expect(loadingText).toBeInTheDocument();
  });
});