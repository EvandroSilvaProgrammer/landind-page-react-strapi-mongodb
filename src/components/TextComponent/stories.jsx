import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis aperiam doloremque tenetur quos nesciunt, minima voluptas animi nulla eligendi odit, consequuntur dolor enim iusto et odio commodi molestiae velit.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
