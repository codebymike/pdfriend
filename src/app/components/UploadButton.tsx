'use client'

import { Dialog } from "@radix-ui/react-dialog"
import { useState } from "react"

const UploadButton = () => {
const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <Dialog open={isOpen} onOpenChange={(v) => {
            if(!v) {
                setIsOpen(v)
            }
        }}></Dialog>
    )
}

export default UploadButton