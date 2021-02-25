import React from 'react'
import styles from '../styles/about.module.css'

function Sobre() {
    React.useEffect(() => {
        document.title = 'Zuno! - Sobre'
    },[])
    
    return <main>
        <div className={styles.homeLink}>
            <a href='/'>Voltar à página inicial</a>
        </div>

        <div className={styles.aboutContainer}>
            <h1>Zuno</h1>
            <p>O jogo zuno é uma modificação do jogo UNO, enquanto o uno tem só algumas regras e acaba relativamente rapido, o Zuno apresenta uma regra para cada carta existente no jogo, assim o fazendo um jogo mais demorado e mais dificil de se acabar, aumentando a competitividade e o peso das certas jogadas</p><br/>
            <p>O jogo foi elaborado em meados de 2019 por dois alunos que pensaram em deixar o jogo UNO mais interessante, depois de mutos testes e buffs e nerfs de cartas aqui está o que foi concebido como o Zuno.</p>
        </div>
    </main>
}

export default Sobre