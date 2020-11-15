import ProgressBlock from '../components/ProgressBlock.vue'

export default {
  title: 'Progress Block',
  component: ProgressBlock,
  argTypes: {
    bgValue: {
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
  components: { ProgressBlock },
  template: '<progress-block v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
