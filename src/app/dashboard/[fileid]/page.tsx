interface PageProps {
    params: {
        fileId: string
    }
}

const page = ({params} : PageProps) => {

    const {fileId} = params

    return fileId

}

export default page