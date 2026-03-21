import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";

export const UntitledLogoMinimal = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cx("flex items-center", className)} {...props}>
            <span className="text-sm font-semibold text-primary">TC</span>
        </div>
    );
};
