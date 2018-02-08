import React from 'react';
import { shallow } from 'enzyme';
import { expensesSummary, ExpensesSummary } from '../../components/ExpensesSummary';
import numeral from 'numeral';

test('should correctly render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2537287435} />);
  expect(wrapper).toMatchSnapshot();
});