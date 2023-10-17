import { forwardRef } from "react"
import { twMerge } from "tailwind-merge";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return(
        <button 
            type={type} 
            className={twMerge(` rounded-full bg-neutral-900 p-2 text-sm text-white font-bold border border-transparent disabled:cursor-not-allowed disabled:opacity-50 hover:scale-[1.02] active:opacity-80 transition`,
            className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button";

export default Button