import type { Meta, StoryObj } from "@storybook/react-vite";
import { KSpinner } from "./KSpinner";

const meta: Meta<typeof KSpinner> = {
  title: "Feedback/Spinner",
  component: KSpinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "스피너의 크기를 결정합니다.",
    },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof KSpinner>;

export const Default: Story = {
  args: {
    size: "md",
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <KSpinner className="text-primary" />
      <KSpinner className="text-destructive" />
      <KSpinner className="text-blue-500" />
      <KSpinner className="text-yellow-500" />
    </div>
  ),
};