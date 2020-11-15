import MarkdownContent from '../components/MarkdownContent.vue'

export default {
  title: 'MarkdownContent',
  component: MarkdownContent,
  argTypes: {
      content: {
      control: {
        type: 'text'
      }
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MarkdownContent },
  template: '<MarkdownContent v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
