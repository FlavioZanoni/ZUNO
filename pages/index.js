import React from 'react'
import styles from '../styles/home.module.css'

function Home() {  
    React.useEffect(() => {
        document.title = 'Zuno! - Página inicial'
    },[]) 

    let randomNum = Math.floor(Math.random() * Math.floor(1099)) 
    const [name, setName] = React.useState(`User-${randomNum}`)
    const [code, setCode] = React.useState('')
    const newRoom = Math.floor(Math.random() * Math.floor(999997))

    const handleFormSubmit = () => {
        if (name.trim() && code.trim()) {
            window.location.href = `http://localhost:3000/game/${code}`
        } else {
            window.alert('Preencha todos os campos')
        }
    }

    const handleFormSubmitCreate = () => {
        if (name.trim()) {
            window.location.href = `http://localhost:3000/game/create/${newRoom}`
        } else {
            window.alert('coloca um nome valido pff')
        }
    }

    // handle change
    const handleNameChange = event => {
        setName(event.target.value)
    }
    const handleCodeChange = event => {
        setCode(event.target.value)
    }

    return (
        <>
            <div className={styles.forms}>
                <h1>Entrar em um jogo</h1>
                <form className={styles.form} method='POST'>
                    <label htmlFor="name">Seu apelido:</label><br/>
                    <input  className={styles.name}
                        id="name"
                        name="name"
                        type="text"
                        placeholder='ex:(xaolin matador de porco)'
                        onChange={handleNameChange}
                        value={name}
                    /> <br/>
                    <label htmlFor="codigo">Código da sala:</label><br/>
                    <input className={styles.name}
                        id="codigo"
                        type="number"
                        name="code"
                        placeholder='15718'
                        onChange={handleCodeChange}
                        value={code}
                    /> <br/> 
                    <button type='reset' onClick={handleFormSubmit}>Entrar na sala</button>
                    <h1>ou</h1>
                </form>

                <form className={styles.form} method="POST">
                    <label htmlFor="name">Seu apelido:</label><br/>
                    <input className={styles.name}
                        id="name"
                        name="name"
                        type="text"
                        placeholder='ex:(xaolin matador de porco)'
                        onChange={handleNameChange}
                        value={name}
                    /> <br/>
                    <button type="reset" onClick={handleFormSubmitCreate}> criar sala</button>
                </form>
            </div>

            <footer className={styles.footer}>
                <p>Criado por: takezo e smokau</p>
                <p>Desenvolvido por: Flávio Zanoni</p>
                <a className={styles.link} href='/rules'>Regras</a>
                <a className={styles.link} href='/about'>Sobre</a>
                <a className={styles.link} target="_blank" rel="noreferrer" href="https://github.com/FlavioZanoni/ZUNO" >Github</a>
            </footer>
        </>
    )
}
export default Home