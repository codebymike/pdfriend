"use client"

import { ChevronDown, ChevronUp, Loader2 } from "lucide-react"
import { Document, Page, pdfjs } from "react-pdf"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useToast } from "./ui/use-toast"
import { useResizeDetector } from "react-resize-detector"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

interface PdfRenderProps {
  url: string
}

const PdfRenderer = ({ url }: PdfRenderProps ) => {

  const { toast } = useToast()
  const { width, ref } = useResizeDetector()
  const [ numPages, setNumPages ] = useState<number>()
  const [ currPage, setCurrPage ] = useState<number>(1)

  const CustomPageValidator = z.object({
    page: z.string().refine((num) => Number(num) > 0 && Number(num) <= numPages!)
  })

  type TCustomPageValidator = z.infer<typeof CustomPageValidator>

  const {} = useForm<TCustomPageValidator>({
    defaultValues: {
      page: "1"
    },
    resolver: zodResolver(CustomPageValidator)
  })

  return (
    <div className="w-full bg-white rounded-md shadow flex flex-col items-center">
        <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
            <div className="flex items-center gap-1.5">
                <Button 
                  aria-label="previous page" 
                  variant="ghost"
                  disabled={ currPage <= 1 }
                  onClick={() => {
                    setCurrPage((prev) => ( prev - 1 > 1 ? prev - 1 : 1 ))
                  }}
                >
                  <ChevronDown className="w-4 h-4" />
                </Button>

                <div className="flex items-center gap-1.5">
                    <Input className="w-12 h-8" />
                    <p className="text-zinc-700 text-sm space-x-1">
                      <span>/</span>
                      <span>{numPages ?? "x"}</span>
                    </p>
                </div>

                <Button 
                  aria-label="next page" 
                  variant="ghost"
                  disabled={ numPages === undefined || currPage === numPages }
                  onClick={() => {
                    setCurrPage((prev) => ( prev + 1 > numPages! ? numPages! : prev + 1 ))
                  }}
                >
                  <ChevronUp className="w-4 h-4" />
                </Button>
            </div>
        </div>

        <div className="flex-1 w-full max-h-screen">
          <div ref={ref}>
            <Document 
              loading={
                <div className="flex justify-center">
                  <Loader2 className="my-24 h-6 w-6 animate-spin" />
                </div>
              } 
              file={url} 
              onLoadError={() => {
                toast({
                  title: "Error loading PDF",
                  description: "Please try again later",
                  variant: "destructive"
                })
              }}
              onLoadSuccess={({numPages}) => {
                setNumPages(numPages)
              }}
              className="max-h-full"
              >
              <Page 
                width={width ? width : 1} 
                pageNumber={currPage} 
              />
            </Document>
          </div>
        </div>
    </div>
  )
}

export default PdfRenderer