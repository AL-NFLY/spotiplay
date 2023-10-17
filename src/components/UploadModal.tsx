'use client'

import useUploadModal from '@/hooks/useUploadModal '
import Modal from './Modal'

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const onChange = (open: boolean) => {
    if(!open) {
      uploadModal.onClose();
    }
  }

  return (
    <Modal
        title='Upload modal title'
        description='Upload model description'
        isOpen={uploadModal.isOpen}
        onChange={onChange}
    >
      Update content
    </Modal>
  )
}

export default UploadModal