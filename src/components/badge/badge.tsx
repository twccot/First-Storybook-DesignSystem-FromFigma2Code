import React from "react";

import cm from "./badge.module.css";

const badgeStatuses = ['planned', 'in progress', 'done'] as const;

const DoneIcon = ({ className }: { className?: string }) => {
  const iconClassName = className 
    ? `${cm.badgeIcon} ${className}` 
    : cm.badgeIcon;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={iconClassName}
      aria-hidden="true"
    >
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
    </svg>
  );
};

const InProgressIcon = ({ className }: { className?: string }) => {
  const iconClassName = className 
    ? `${cm.badgeIcon} ${className}` 
    : cm.badgeIcon;
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClassName}
      aria-hidden="true"
    >
      <path d="M12 6l0 -3" />
      <path d="M16.25 7.75l2.15 -2.15" />
      <path d="M18 12l3 0" />
      <path d="M16.25 16.25l2.15 2.15" />
      <path d="M12 18l0 3" />
      <path d="M7.75 16.25l-2.15 2.15" />
      <path d="M6 12l-3 0" />
      <path d="M7.75 7.75l-2.15 -2.15" />
    </svg>
  );
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Status of the badge. Required when no children are provided. Can be 'planned', 'in progress', or 'done'. The text is automatically derived from the status. */
  status?: typeof badgeStatuses[number];
  /** Optional className for adding custom CSS classes to the Badge element */
  className?: string;
  /** Custom text content. When provided, status is ignored and no status icons are shown. */
  children?: React.ReactNode;
}

const composeClassName = (base: string, extra?: string) =>
  extra ? `${base} ${extra}` : base;

const statusClassMap: Record<typeof badgeStatuses[number], string> = {
  'planned': 'badge--planned',
  'in progress': 'badge--in-progress',
  'done': 'badge--done',
};

const statusTextMap: Record<typeof badgeStatuses[number], string> = {
  'planned': 'Planned',
  'in progress': 'In Progress',
  'done': 'Done',
};

export const Badge = ({ status, children, className, ...props }: BadgeProps) => {
  const hasCustomText = children !== undefined;
  
  // If custom text is provided, don't use status
  if (hasCustomText) {
    const rootClassName = composeClassName(cm.badge, className);
    return (
      <span className={rootClassName} {...props}>
        {children}
      </span>
    );
  }
  
  // If no custom text, status is required
  if (!status) {
    throw new Error('Badge component requires either a status prop or children prop');
  }
  
  const statusClass = cm[statusClassMap[status]] || cm['badge--planned'];
  const statusText = statusTextMap[status] || 'Planned';
  const rootClassName = composeClassName(
    `${cm.badge} ${statusClass}`,
    className
  );

  return (
    <span className={rootClassName} {...props}>
      {status === 'in progress' && <InProgressIcon className={cm['badgeIcon--in-progress']} />}
      {status === 'done' && <DoneIcon className={cm['badgeIcon--done']} />}
      {statusText}
    </span>
  );
};

Badge.displayName = 'Badge';

