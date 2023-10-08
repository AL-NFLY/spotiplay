import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    classname?: string;
}
const Box: React.FC<BoxProps> = ({children, classname}) => {
  return (
    <div className={twMerge(`bg-neutral-900 rounded-md w-full h-fit`,
        classname
      )}
    >
        {children}
    </div>
  )
}

export default Box