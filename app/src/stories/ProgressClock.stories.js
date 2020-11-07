import ProgressBar from '../components/ProgressBar.vue'

export default {
  title: 'Progress Bar',
  component: ProgressBar,
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
  components: { ProgressBar },
  template: '<progress-bar v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
