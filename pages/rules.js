import React from 'react'
import styles from '../styles/rules.module.css'
import Image from 'next/image'


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

            <h3>Estacavel</h3>
            <p>A carta é estacavel caso tenha o mesmo valor, independendo de sua cor</p>

            <div>
                <h3>Carta: 'reverso'</h3>
                <p>Ao jogada a ordem de jogo é trocada (de sentido horario vai pra sentido anti-horario e vice-versa), e também pode mudar a direção do efeito de cartas com qualidade "reversivel"</p>
                <ul>
                    <li>Efeito estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/revB.svg" 
                        alt="carta reverso azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/revR.svg" 
                        alt="carta reverso vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/revG.svg" 
                        alt="carta reverso verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/revY.svg" 
                        alt="carta reverso amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: 'bloqueio'</h3>
                <p>Ao ser jogada ela bloqueia o próximo jogador e também pode bloquear efeitos de qualquer carta que tenha qualidade "bloqueavel"</p>
                <ul>
                    <li>Efeito estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/bloqB.svg" 
                        alt="carta bloqueio azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/bloqR.svg" 
                        alt="carta bloqueio vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/bloqG.svg" 
                        alt="carta bloqueio verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/bloqY.svg" 
                        alt="carta bloqueio amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '0'</h3>
                <p>Ao joga-la as cartas de cada jogador sao trocadas, no sentido horario.</p>
                <ul>
                    <li>Efeito estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/0B.svg" 
                        alt="carta 0 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/0R.svg" 
                        alt="carta 0 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/0G.svg" 
                        alt="carta 0 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/0Y.svg" 
                        alt="carta 0 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '1'</h3>
                <p>Quando é jogada, todos devem bater na mesa ( um botão aparecerá na tela), o ultimo a bater compra uma carta</p>
                <ul>
                    <li>Efeito de compra estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/1B.svg" 
                        alt="carta 1 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/1R.svg" 
                        alt="carta 1 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/1G.svg" 
                        alt="carta 1 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/1Y.svg" 
                        alt="carta 1 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '2'</h3>
                <p>Ao ser jogada todas as cartas na mão dos jogadores são recolhidas, misturadas e repartidas igualmente, após ser jogada essa carta é tirada do baralho, so existem 4 dessas cartas no jogo </p>
                <ul>
                    <li>Efeito não estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/2B.svg" 
                        alt="carta 2 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/2R.svg" 
                        alt="carta 2 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/2G.svg" 
                        alt="carta 2 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/2Y.svg" 
                        alt="carta 2 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '3'</h3>
                <p>regras da carta</p>
                <ul>
                    <li>Efeito estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/3B.svg" 
                        alt="carta 3 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/3R.svg" 
                        alt="carta 3 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/3G.svg" 
                        alt="carta 3 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/3Y.svg" 
                        alt="carta 3 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '4'</h3>
                <p>Ao jogar essa carta a próxima pessoa da rodada deve tentar adivinhar uma carta da pessoa que jogou, caso essa pessoa consiga, o jogador deve pescar 01 carta, caso nao consiga a pessoa adivinhando deve pescar 01 carta</p>
                <ul>
                    <li>Efeito não estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/4B.svg" 
                        alt="carta 4 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/4R.svg" 
                        alt="carta 4 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/4G.svg" 
                        alt="carta 4 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/4Y.svg" 
                        alt="carta 4 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '5'</h3>
                <p>Ao jogar essa carta o jogador da mesma, e o proximo jogador da rodade devem trocar uma carta entre si</p>
                <ul>
                    <li>Efeito não estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/5B.svg" 
                        alt="carta 5 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/5R.svg" 
                        alt="carta 5 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/5G.svg" 
                        alt="carta 5 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/5Y.svg" 
                        alt="carta 5 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '6'</h3>
                <p>Essa carta pode ser jogada somente em conjunto de outra carta 6 </p>
                <ul>
                    <li>Efeito não estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/6B.svg" 
                        alt="carta 6 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/6R.svg" 
                        alt="carta 6 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/6G.svg" 
                        alt="carta 6 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/6Y.svg" 
                        alt="carta 6 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '7'</h3>
                <p>Ao jogar essa carta você ganha o poder de trocar suas cartas com as de qualquer jogador da mesa</p>
                <ul>
                    <li>Efeito não estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/7B.svg" 
                        alt="carta 7 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/7R.svg" 
                        alt="carta 7 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/7G.svg" 
                        alt="carta 7 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/7Y.svg" 
                        alt="carta 7 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '8'</h3>
                <p>Ao jogada o baralho de pesca e o baralho de cartas jogadas são invertidos</p>
                <ul>
                    <li>Efeito estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/8B.svg" 
                        alt="carta 8 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/8R.svg" 
                        alt="carta 8 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/8G.svg" 
                        alt="carta 8 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/8Y.svg" 
                        alt="carta 8 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '9'</h3>
                <p>Esta carta pode somente ser jogada em conjunto com uma carta de numero primo ( 1, (2), 3, 5, 7 ) a carta em conjunto perde o efeito ao não ser que o primo em conjunto seja a carta '2', caso seja o efeito continua</p>
                <ul>
                    <li>Efeito não estacavel</li>
                    <li>Não bloqueavel</li>
                    <li>Não reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/9B.svg" 
                        alt="carta 9 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/9R.svg" 
                        alt="carta 9 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/9G.svg" 
                        alt="carta 9 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/9Y.svg" 
                        alt="carta 9 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '+2'</h3>
                <p>Ao jogada o próximo jogador pesca 02 cartas</p>
                <ul>
                    <li>Efeito estacavel</li>
                    <li>Bloqueavel </li>
                    <li>Reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/2+B.svg" 
                        alt="carta +2 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/2+R.svg" 
                        alt="carta +2 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/2+G.svg" 
                        alt="carta +2 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/2+Y.svg" 
                        alt="carta +2 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

            <div>
                <h3>Carta: '+4'</h3>
                <p>Ao jogada o próximo jogador pesca 04 cartas</p>
                <ul>
                    <li>Efeito estacavel</li>
                    <li>Bloqueavel</li>
                    <li>Reversivel</li>
                </ul>
                <div className={styles.cards}>
                    <h5>Ex:</h5>
                    <Image src="/cards/4+.svg" 
                        alt="carta +4 azul"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/4+.svg" 
                        alt="carta +4 vermelha"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/4+.svg" 
                        alt="carta +4 verde"
                        width="100"
                        height="200"
                    />
                    <Image src="/cards/4+.svg" 
                        alt="carta +4 amarela"
                        width="100"
                        height="200"
                    />
                </div>
            </div>

        </div>
    </main>
}

export default Rules