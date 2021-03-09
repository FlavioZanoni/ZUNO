import { useRouter } from 'next/router'


// api para conectar com o sockete fazer a sala com esse id

function Game() {
    const router = useRouter()
    const id = router.query.id

    return <h1>Id do Jogo : {id} </h1>
}

export default Game