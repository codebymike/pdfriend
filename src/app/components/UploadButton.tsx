'use client'

import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"
import { useState } from "react"
import { Button } from "./ui/button"
import DropZone from 'react-dropzone'

const UploadButton = () => {
const [isOpen, setIsOpen] = useState<boolean>(false)

const UploadDropZone = () => {
    return <DropZone multiple={false}>
        {({ getRootProps, getInputProps, acceptedFiles }) => (
            <div {...getRootProps()} className="border h-64 m-4 border-dashed border-gray-300 rounded-lg">

            </div>
        )}
    </DropZone>
}

    return (
        <Dialog open={isOpen} onOpenChange={(v) => {
            if(!v) {
                setIsOpen(v)
            }
        }}>
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
                <Button>Upload PDF</Button>
            </DialogTrigger>

            <DialogContent>
                <UploadDropZone />
            </DialogContent>
        </Dialog>
    )
}

export default UploadButton