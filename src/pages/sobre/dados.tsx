import './index.scss';
import './index.scss';
import Box from '../../components/box/box';
import Menu from '../../components/menu/menu';

export default function Dados() {
    return(  
        <>
         <div id="root"></div>
            {/*header*/}
            <header>
                <div className='titleHeader'>
                    <h1>PROJETO ALERTA</h1>
                    <p>Previnir salva vidas!</p>
                </div>
                <div>
                    <Menu inicio="Ínicio" dados="Dados"> </Menu>
                    <img src="./img/alerta.png" alt="" />
                </div>
            </header>

            {/*Content page*/}
            <main>
                <h2 className='subTitle'>Dados Recentes</h2>
                <section>
                    <div>
                        <img className='alertaImg' src='./img/mosquito.png' />
                        <Box
                            title="Veja os dados recentes"
                            content="As arboviroses, como Dengue, Chikungunya e Zika, 
                            {--------
                            
                            
                            ----------}
                            são doenças transmitidas pelo mosquito Aedes aegypti. Esses mosquitos se proliferam em ambientes com água parada e são os principais responsáveis pela transmissão das doenças. A prevenção é essencial para controlar a propagação desses vírus e proteger a saúde da comunidade."
                        />
                    </div>

                </section>
            </main>

            <footer>
                <p>Projeto criado por Joab Nogueira, com o intuito de espalhar informações sobre os cuidados e a prevenção contra o mosquito da dengue. Com a chegada do verão, o número de casos aumenta, e a prevenção é a nossa melhor aliada.</p>
                <p>Joenog ©</p>
            </footer>
        </>
    )
};