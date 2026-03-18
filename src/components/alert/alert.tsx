import React, { useState } from "react";
import cm from "./alert.module.css";

const alertVariants = ["info", "warning", "success", "danger"] as const;

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant of the alert. Info (default), Warning, Success, or Danger. */
  variant?: (typeof alertVariants)[number];
  /** Optional className for adding custom CSS classes to the Alert element */
  className?: string;
  /** Main message content. Can be text or React nodes (e.g. emphasized text and link). */
  children?: React.ReactNode;
  /** Whether the alert can be dismissed. Defaults to true. */
  dismissible?: boolean;
  /** Callback fired when the alert is dismissed. */
  onDismiss?: () => void;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

const variantClassMap: Record<(typeof alertVariants)[number], string> = {
  info: "alert--info",
  warning: "alert--warning",
  success: "alert--success",
  danger: "alert--danger",
};

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cm.alertIcon}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cm.alertIcon}
    aria-hidden="true"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cm.alertIcon}
    aria-hidden="true"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

const DangerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cm.alertIcon}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9l-6 6" />
    <path d="M9 9l6 6" />
  </svg>
);

const variantIconMap: Record<(typeof alertVariants)[number], React.ReactNode> = {
  info: <InfoIcon />,
  warning: <WarningIcon />,
  success: <SuccessIcon />,
  danger: <DangerIcon />,
};

const CloseIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
    aria-label="Close alert"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  </button>
);

export const Alert = ({
  variant = "info",
  children,
  className,
  dismissible = true,
  onDismiss,
  ...props
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const variantClass = cm[variantClassMap[variant]] ?? cm["alert--info"];
  const rootClassName = composeClassName(`${cm.alert} ${variantClass}`, className);

  return (
    <div className={rootClassName} role="alert" {...props}>
      <div className={cm.alertAccent} aria-hidden="true" />
      <div className={cm.alertIconWrap}>{variantIconMap[variant]}</div>
      <div className={cm.alertContent}>{children}</div>
      {dismissible && (
        <CloseIcon className={cm.alertClose} onClick={handleDismiss} />
      )}
    </div>
  );
};

Alert.displayName = "Alert";
