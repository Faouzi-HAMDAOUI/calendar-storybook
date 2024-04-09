import { fn } from '@storybook/test';
import { FieldsCalendar } from './FieldsCalendar';

export default {
  title: 'UI/FieldsCalendar',
  component: FieldsCalendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: "fieldsDate"
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onchange: fn() },
};

export const Calendar = {
  args: {
    value: "calendar",
    name: 'FieldsCalendar',
    onchange: fn()
  },
};