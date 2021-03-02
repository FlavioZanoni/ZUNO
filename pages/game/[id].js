import { useRouter } from 'next/router'

function Game() {
    const router = useRouter()
    const id = router.query.id

    return <h1>Id do Jogo : {id} </h1>
}

export default Game