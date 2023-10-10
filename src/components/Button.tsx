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
            className={twMerge(`w-full rounded-full bg-green-500 px-3 py-2 text-black font-semibold border border-transparent disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition`,
            className
            )}
            disabled={disabled}
            ref={ref}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button";

export default Button