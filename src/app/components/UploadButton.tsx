'use client'

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { useState } from "react"
import { Button } from "./ui/button"
import DropZone from 'react-dropzone'

const UploadButton = () => {
const [isOpen, setIsOpen] = useState<boolean>(false)

const UploadDropzone = () => {
    return (
        <DropZone multiple={false}>
            {({ getRootProps, getInputProps, acceptedFiles }) => (
                <div
                    {...getRootProps()}
                    className='border h-64 m-4 border-dashed border-gray-300 rounded-lg'>
                        <div className='flex items-center justify-center h-full w-full'>
                            <label
                                htmlFor='dropzone-file'
                                className='flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'>
                                <div className='flex flex-col items-center justify-center pt-5 pb-6'>

                                </div>
                            </label>
                        </div>
                    </div>
            )}
        </DropZone>
    )
}
    return (
        <Dialog
            open={isOpen}
            onOpenChange={(v) => {
                if (!v) {
                setIsOpen(v)
                }
            }}>
            <DialogTrigger
                onClick={() => setIsOpen(true)}
                asChild>
                <Button>Upload PDF</Button>
            </DialogTrigger>

            <DialogContent>
                <UploadDropzone />
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton