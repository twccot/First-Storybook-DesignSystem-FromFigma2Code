import type { Meta, StoryObj } from "@storybook/react";

import { PropsCategory } from '#storybook/constants';

import { Alert } from "@/components";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Global alerts are high-visibility messages that communicate critical information to users across the product. They are system-wide notifications that demand attention or provide important updates about system status, account state, or major events.\n\n[Figma Design](https://www.figma.com/design/h2R5IH3pXUOG2JWEVen21U/DS?node-id=1-19) · [Storybook](https://www.figma.com/design/h2R5IH3pXUOG2JWEVen21U/DS?node-id=1-129)",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "warning", "success", "danger"],
      table: {
        category: PropsCategory.VISUAL,
      },
    },
    dismissible: {
      control: "boolean",
      table: {
        category: PropsCategory.VISUAL,
      },
    },
    onDismiss: {
      table: {
        category: PropsCategory.EVENTS,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children:
    "Users are now required to enable two-factor authentication as an additional security measure.",
  variant: "info" as const,
  dismissible: true,
};

export const Controls: Story = {
  args: defaultArgs,
};

/**
 * Info variant for general information and updates.
 * Use cases:
 * - System status updates
 * - Account or security notices
 * - Informational announcements
 */
export const Info: Story = {
  args: {
    ...defaultArgs,
    variant: "info",
    children:
      "Users are now required to enable two-factor authentication as an additional security measure.",
  },
};

/**
 * Warning variant for cautionary messages.
 * Use cases:
 * - Upcoming changes
 * - Deprecation notices
 * - Non-critical issues
 */
export const Warning: Story = {
  args: {
    ...defaultArgs,
    variant: "warning",
    children:
      "Scheduled maintenance will occur on Saturday. Some features may be temporarily unavailable.",
  },
};

/**
 * Success variant for positive outcomes.
 * Use cases:
 * - Completed actions
 * - Successful updates
 * - Confirmations
 */
export const Success: Story = {
  args: {
    ...defaultArgs,
    variant: "success",
    children: "Your account settings have been updated successfully.",
  },
};

/**
 * Danger variant for critical or error states.
 * Use cases:
 * - Security alerts
 * - Critical failures
 * - Required actions
 */
export const Danger: Story = {
  args: {
    ...defaultArgs,
    variant: "danger",
    children: "Your session will expire in 5 minutes. Please save your work.",
  },
};

/**
 * Non-dismissible alert when the message must remain visible.
 * Use cases:
 * - Critical system messages
 * - Mandatory announcements
 */
export const NonDismissible: Story = {
  args: {
    ...defaultArgs,
    variant: "info",
    dismissible: false,
    children:
      "This is an important message that cannot be dismissed until acknowledged.",
  },
};

/**
 * Alert with emphasized text and link, matching Figma default variant.
 * Use cases:
 * - Call-to-action links
 * - Documentation or help links
 */
export const WithLink: Story = {
  args: {
    ...defaultArgs,
    variant: "info",
    children: (
      <>
        <strong>Emphasized description.</strong>{" "}
        <a href="#" style={{ textDecoration: "underline", color: "inherit" }}>
          Link
        </a>
      </>
    ),
  },
};

/**
 * All variants for comparison.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info">
        Users are now required to enable two-factor authentication as an
        additional security measure.
      </Alert>
      <Alert variant="warning">
        Scheduled maintenance will occur on Saturday. Some features may be
        temporarily unavailable.
      </Alert>
      <Alert variant="success">
        Your account settings have been updated successfully.
      </Alert>
      <Alert variant="danger">
        Your session will expire in 5 minutes. Please save your work.
      </Alert>
    </div>
  ),
};
