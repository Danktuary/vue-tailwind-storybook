import { Meta, Story } from '@storybook/vue3';
import HelloWorld from './HelloWorld.vue';

export default {
	title: 'HelloWorld',
	component: HelloWorld,
	argTypes: {
		message: {
			control: 'text',
			defaultValue: 'Default value',
		},
	},
} as Meta;

const Template: Story = args => ({
	components: {
		HelloWorld,
	},
	setup() {
		return {
			args,
		}
	},
	template: `
		<HelloWorld v-bind="args" />
	`,
});

export const Default = Template.bind({});

export const CustomMessage = Template.bind({});
CustomMessage.args = {
	message: 'Hello, World!'
};
