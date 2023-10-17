import { forwardRef } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLHtmlElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props
}, ref) => {
    return (
        <input />
    )
}) 

export default Input