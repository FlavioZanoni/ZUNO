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

            <div>
                <h3>Carta: '0'</h3>
                <p>Ao joga-la as cartas de cada jogador sao trocadas, no sentido horario.</p>
                <img src="../c/zerob.png" alt="0blue"/>
            </div>

            <div>
                <h3>Carta: '1'</h3>
                <p>Quando é jogada, todos devem bater na mesa ( um botão aparecerá na tela), o ultimo a bater compra uma carta</p>
            </div>

            <div>
                <h3>Carta: '2'</h3>
                <p>Ao ser jogada todas as cartas na mão dos jogadores são recolhidas, misturadas e repartidas igualmente, após ser jogada essa carta é tirada do baralho, so existem 4 dessas cartas no jogo </p>
            </div>

            <div>
                <h3>Carta: '3'</h3>
                <p>regras da carta</p>
            </div>

            <div>
                <h3>Carta: '4'</h3>
                <p>Ao jogar essa carta a próxima pessoa da rodada deve tentar adivinhar uma carta da pessoa que jogou, caso essa pessoa consiga, o jogador deve pescar 01 carta, caso nao consiga a pessoa adivinhando deve pescar 01 carta</p>
            </div>

            <div>
                <h3>Carta: '5'</h3>
                <p>Ao jogar essa carta o jogador da mesma, e o proximo jogador da rodade devem trocar uma carta entre si</p>
            </div>

            <div>
                <h3>Carta: '6'</h3>
                <p>Essa carta pode ser jogada somente em conjunto de outra carta 6 </p>
            </div>

            <div>
                <h3>Carta: '7'</h3>
                <p>Ao jogar essa carta você ganha o poder de trocar suas cartas com as de qualquer jogador da mesa</p>
            </div>

            <div>
                <h3>Carta: '8'</h3>
                <p>Ao jogada o baralho de pesca e o baralho de cartas jogadas são invertidos</p>
            </div>

            <div>
                <h3>Carta: '9'</h3>
                <p>Esta carta pode somente ser jogada em conjunto com uma carta de numero primo ( 1, 3, 5, 7 ) a carta em conjunto perde o efeito</p>
            </div>

            <div>
                <h3>Carta: '+2'</h3>
                <p>Ao jogada o próximo jogador pesca 02 cartas</p>
            </div>

            <div>
                <h3>Carta: '+4'</h3>
                <p>Ao jogada o próximo jogador pesca 04 cartas</p>
            </div>

            <div>
                <h3>Carta: 'reverso'</h3>
                <p>Ao jogada a ordem de jogo é trocada (de sentido horario vai pra sentido anti-horario e vice-versa)</p>
            </div>

            <div>
                <h3>Carta: 'bloqueio'</h3>
                <p>Esta carta bloqueia o proximo jogador ou bloqueia o efeito de uma carta jogada se ela for de mesma cor</p>
            </div>

        </div>
    </main>
}

export default Rules