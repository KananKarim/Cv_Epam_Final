import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MyForm from '../components/Form';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('MyForm component', () => {
  it('renders without crashing', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <MyForm />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Enter skill name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter skill range')).toBeInTheDocument();
  });
});
