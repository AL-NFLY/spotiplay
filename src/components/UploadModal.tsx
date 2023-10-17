'use client'

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

import useUploadModal from '@/hooks/useUploadModal'
import Modal from './Modal'
import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState();
  const uploadModal = useUploadModal();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: '',
      title: '',
      song: null,
      image: null,
    }
  })

  const onChange = (open: boolean) => {
    if(!open) {
      reset();
      uploadModal.onClose();
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // TODO: Upload to supabase
  }

  return (
    <Modal
        title='Add a song'
        description='Upload an mp3 file'
        isOpen={uploadModal.isOpen}
        onChange={onChange}
    >
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-3'
      >
        <Input
          id='title'
          disabled={isLoading}
          {...register('title', { required: true })}
          placeholder='Song title'
        />

        <Input 
          id='author'
          disabled={isLoading}
          {...register('author', { required: true })}
          placeholder='Song author'
        />

        <>
          <p className='-mb-2'>Select a song file</p>
          <Input 
            id='song'
            type='file'
            disabled={isLoading }
            accept='.mp3'
            {...register('file', { required: true })}
          />
        </>

        <>
          <p className='-mb-2'>Select an image file</p>
          <Input
            id='image'
            type='file'
            disabled={isLoading}
            accept='image/*'
            {...register('image', { required: true })}
          />
        </>

        <Button
          disabled={isLoading} type='submit' className='mt-2 bg-green-500 text-black'
        >
          Create
        </Button>
      </form>
    </Modal>
  )
}

export default UploadModal