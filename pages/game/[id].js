export async function getServerSideProps() {
    const res = await fetch('API')
    const data = await res.json()

    return {props: { data }}
}



function Game({ data }) {
    const router = useRouter()
    const id = router.query.id

    return <h1>Id do Jogo : {id} </h1>
}

export default Game