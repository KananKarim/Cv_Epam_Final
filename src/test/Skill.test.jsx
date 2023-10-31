import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Skill from '../components/Skill';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Skill component', () => {
  it('renders without crashing', () => {
    const initialState = {
      skills: {
        skills: [
          { id: 1, name: 'Test Skill', range: 50 },
        ],
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Skill />
      </Provider>
    );

    expect(screen.getByText('Test Skill')).toBeInTheDocument();
  });
});
