import { Document } from "react-pdf"
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

const PdfRenderer = () => {
  return (
    <div className="w-full bg-white rounded-md shadow flex flex-col items-center">
        <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
            <div className="flex items-center gap-1.5">
                Top Bar
            </div>
        </div>

        <div className="flex-1 w-full max-h-screen">
          <div className="">
            <Document />
          </div>
        </div>
    </div>
  )
}

export default PdfRenderer