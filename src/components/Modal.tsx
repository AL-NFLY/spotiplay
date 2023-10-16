import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title: string;
    description: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({children, description, isOpen, onChange, title}) => {
  return (
    <Dialog.Root
        open={isOpen}
        defaultOpen={isOpen}
        onOpenChange={onChange}
    >
        <Dialog.Portal>
            <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
            <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-1/2 left-1/2 max-h-full md:max-h-[85vh] h-full md:h-auto w-full md:max-[90vw] md:max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-800 p-6 focus:outline-none">
                <Dialog.Title className="mb-4 text-xl text-center font-bold">
                    {title}
                </Dialog.Title>
                <Dialog.Description className="mb-5 text-sm leading-normal text-center">
                    {description}
                </Dialog.Description>
                <div>
                    {children}
                </div>
                <Dialog.Close asChild>
                    <button className="absolute top-3 right-3 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-neutral-400 hover:text-white focus:outline-none">
                        <IoClose />
                    </button>
                </Dialog.Close>

            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal