import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import { Button, Props } from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>LABEL</Button>;

export const Base = Template.bind({
  hoge: 'true',
});