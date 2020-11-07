import ProgressClock from '../components/ProgressClock.vue'

export default {
  title: 'Progress Clock',
  component: ProgressClock,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1
      }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProgressClock },
  template: '<progress-clock v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
