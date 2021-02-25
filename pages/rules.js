import React from 'react'
import styles from '../styles/rules.module.css'

function Rules() {
    React.useEffect(() => {
        document.title = 'Zuno! - Regras'
    },[]) 

    return <main>

        <div className={styles.homeLink}>
            <a href='/'> Voltar à página inicial</a>
        </div>
    
        <div className={styles.rulesContainer}>
            <h1>Regras:</h1>

            <h3>Cores:</h3>
            <p>Na questão de cores, o jogo se comporta como uno, so pode jogar a carta se for da mesma cor ou de mesmo valor</p>

            <h3>Carta: '0'</h3>
            <p>regras da carta</p>

            <h3>Carta: '1'</h3>
            <p>regras da carta</p>

            <h3>Carta: '2'</h3>
            <p>regras da carta</p>

            <h3>Carta: '3'</h3>
            <p>regras da carta</p>

            <h3>Carta: '4'</h3>
            <p>regras da carta</p>

            <h3>Carta: '5'</h3>
            <p>regras da carta</p>

            <h3>Carta: '6'</h3>
            <p>regras da carta</p>

            <h3>Carta: '7'</h3>
            <p>regras da carta</p>

            <h3>Carta: '8'</h3>
            <p>regras da carta</p>

            <h3>Carta: '9'</h3>
            <p>regras da carta</p>

            <h3>Carta: '+2'</h3>
            <p>regras da carta</p>

            <h3>Carta: '+4'</h3>
            <p>regras da carta</p>

            <h3>Carta: 'reverso'</h3>
            <p>regras da carta</p>

            <h3>Carta: 'bloqueio'</h3>
            <p>regras da carta</p>

            <h3>Carta: 'Muda cor'</h3>
            <p>regras da carta</p>
        </div>
    </main>
}

export default Rules