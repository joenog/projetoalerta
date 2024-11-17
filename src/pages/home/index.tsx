import './index.scss';
import Box from '../../components/box/box';
import Menu from '../../components/menu/menu'

export default function Home() {
    return(
        <> 
            {/*header*/}
            <header>
                <div className='titleHeader'>
                    <h1>PROJETO ALERTA</h1>
                    <p>Previnir salva vidas</p>
                </div>
                <div>
                    <Menu inicio="Ínicio" sobre="Sobre"> </Menu>
                    <img src="./img/alerta.png" alt="" />
                </div>
            </header>

            {/*Content page*/}
            <main>
                <h2 className='subTitle'>Informe-se</h2>
                <section>
                    <div>
                        <img className='alertaImg' src='./img/mosquito.png'/>
                        <Box
                            title="O que são arboviroses"
                            content="As arboviroses, como Dengue, Chikungunya e Zika, são doenças transmitidas pelo mosquito Aedes aegypti. Esses mosquitos se proliferam em ambientes com água parada e são os principais responsáveis pela transmissão das doenças. A prevenção é essencial para controlar a propagação desses vírus e proteger a saúde da comunidade."
                        />
                    </div>
               
                    <div>
                        <img className='alertaImg' src='./img/mosquito.png' />
                        <Box
                            title="Dengue"
                            content="Sintomas e Prevenção A Dengue é uma das arboviroses mais comuns e pode causar sintomas como febre alta, dores no corpo, dores de cabeça e erupções cutâneas. Em casos graves, pode levar a complicações como hemorragias. A prevenção está diretamente relacionada ao combate ao mosquito transmissor. Eliminar focos de água parada, como pneus, garrafas e caixas d'água destampadas, é fundamental para evitar a proliferação do Aedes aegypti."
                        />
                    </div>

                    <div>
                        <img className='alertaImg' src='./img/mosquito.png' />
                        <Box
                            title="Chikungunya"
                            content="Sintomas e Cuidados A Chikungunya também é transmitida pelo Aedes aegypti e seus sintomas incluem febre alta, dor nas articulações e erupções cutâneas. A dor nas articulações pode persistir por semanas ou até meses, afetando a qualidade de vida dos pacientes. O controle do mosquito transmissor é a principal forma de prevenção, e ações de conscientização e eliminação de focos são essenciais para evitar surtos na comunidade."
                        />
                    </div>

                    <div>
                        <img className='alertaImg' src='./img/mosquito.png' />
                        <Box
                            title="Zika"
                            content="Riscos e Prevenção O Zika é uma doença viral transmitida pelo Aedes aegypti e pode causar febre, erupções na pele e dores no corpo. A principal preocupação em relação ao Zika é o risco de malformações no feto, caso a mulher grávida seja infectada. Além do combate ao mosquito, é importante que as gestantes sigam orientações médicas rigorosas e adotem medidas para evitar a picada do mosquito."
                        />
                    </div>
                </section>

                <h2 className='subTitle'>Ajude</h2>
                <section>
                    <Box
                        title="Ações Comunitárias de Controleika"
                        content="A prevenção das arboviroses depende do esforço coletivo de todos os moradores da comunidade. Para isso, é necessário promover ações de conscientização sobre a importância de eliminar criadouros de mosquitos e adotar hábitos que dificultem a proliferação. Organizar mutirões de limpeza, fiscalizar áreas de risco e garantir a cobertura de depósitos de água são medidas simples, mas eficazes."
                    />

                    <Box
                        title="Como você pode ajudar?"
                        content="Cada pessoa pode fazer a diferença no combate às arboviroses. Além de eliminar focos de água parada em sua residência, lembre-se de utilizar repelentes e telas de proteção para evitar a picada do mosquito. Ao adotar esses cuidados, você estará contribuindo para a saúde da sua comunidade e ajudando a reduzir a propagação dessas doenças."
                    />
                </section>
            </main>

            <footer>
                <h1>Footer</h1>
            </footer>
        </>
    );
}