import authReducer from '../../reducers/auth';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: expenses[1].id
  };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: expenses[1].id
  });
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: expenses[1].id }, action);
  expect(state).toEqual({});
});