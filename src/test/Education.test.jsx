import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import educationSkills from '../features/educationSkills';
import Education from '../components/Education';

describe('Education component', () => {
  it('renders without crashing', () => {
    const store = configureStore({ reducer: educationSkills });
    const { container } = render(
      <Provider store={store}>
        <Education />
      </Provider>
    );
    expect(container).toBeTruthy();
  });
});
