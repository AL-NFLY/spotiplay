'use client'

import Modal from '@/components/Modal';
import { useEffect, useState } from 'react'


const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted) {
        return null;
    }

    return (
        <>
            <Modal 
                title='Test Model'
                description='Test Description'
                isOpen
                onChange={() => {}}
            />
        </>
    )
}

export default ModalProvider 