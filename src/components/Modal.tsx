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
            <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full md:max-h-[85vh] h-full md:h-auto w-full md:max-[90vw] md:max-w-md translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-6 focus:outline-none">
                <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal