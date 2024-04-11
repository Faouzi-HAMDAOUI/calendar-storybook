import { fn } from '@storybook/test';
import { FieldsCalendar } from './FieldsCalendar';

export default {
  title: 'UI/FieldsCalendar',
  component: FieldsCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: "fieldsDate"
  },
  args: { onchange: fn() },
};

export const CalendarFields = {
  args: {
    value: "calendar",
    name: 'FieldsCalendar',
    onchange: fn()
  },
};