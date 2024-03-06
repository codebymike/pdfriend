interface PageProps {
    params: {
        fileid: string
    }
}

const page = ({params} : PageProps) => {

    const {fileid} = params

    return (
        <div>{fileid}</div>
    )

}

export default page