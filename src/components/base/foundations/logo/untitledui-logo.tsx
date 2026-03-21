import type { HTMLAttributes } from "react";
import { cx } from "@/utils/cx";

export const UntitledLogo = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cx("flex items-center gap-2", className)} {...props}>
            <span className="text-md font-semibold text-primary">★ Tammy Coombs ★</span>
        </div>
    );
};
