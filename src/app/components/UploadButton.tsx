'use client'

import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"
import { useState } from "react"
import { Button } from "./ui/button"
import DropZone from 'react-dropzone'

const UploadButton = () => {
const [isOpen, setIsOpen] = useState<boolean>(false)

const UploadDropZone = () => {
    return <div></div>
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