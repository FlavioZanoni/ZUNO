import { useRouter } from 'next/router'

let createGame = () => {
    const router = useRouter()
    const { id }  = router.query

    return <div>
        <h1>creating game { id } ...</h1>
    </div>
}

export default createGame