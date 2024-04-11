import { fn } from '@storybook/test';
import { MyCalendar } from './MyCalendar';

export default {
  title: 'UI/Calendar',
  component: MyCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: new Date()
  },
  args: { onchange: fn() },
};

export const Calendar = {
  args: {
    value: new Date(),
    onchange: fn()
  },
};