import { useState } from "react"
import { Dialog, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Expand } from "lucide-react"
import { DialogContent } from "@radix-ui/react-dialog"
import SimpleBar from "simplebar-react"

const PdfFullscreen = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog 
            open={isOpen}
            onOpenChange={(v) => {
                if( !v ) setIsOpen(v)
            }}
        >
            <DialogTrigger asChild>
                <Button variant='ghost' className="gap-1.5" aria-label="fullscreen">
                    <Expand className="w-4 h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-full">
                <SimpleBar autoHide={false} className="max-h-[calc(100vh-10rem)] mt-6">

                </SimpleBar>
            </DialogContent>
        </Dialog>
    )
}

export default PdfFullscreen