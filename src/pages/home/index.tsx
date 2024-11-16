import './index.scss';

function Home() {
    return (
        <>    
            <header>
                <h1>PROJETO ALERTA</h1>
                <p>A prevenção salva vidas</p>
                <img src="../assets/img/mosquito.jpg" alt="Descrição da imagem" />

            </header>

            <main>
                <section>
                    <div className='box'>
                        <h2>O que são as arboviroses?</h2>
                        <p>As arboviroses, como Dengue, Chikungunya e Zika, são doenças transmitidas pelo mosquito Aedes aegypti. Esses mosquitos se proliferam em ambientes com água parada e são os principais responsáveis pela transmissão das doenças. A prevenção é essencial para controlar a propagação desses vírus e proteger a saúde da comunidade.</p>

                        <img src="./assets/img/mosquito.jpg" alt="" />
                    </div>
                    <div className='box'>
                    </div>
                    <div className='box'>
                        <h2>Dengue</h2>
                        <p>Sintomas e Prevenção A Dengue é uma das arboviroses mais comuns e pode causar sintomas como febre alta, dores no corpo, dores de cabeça e erupções cutâneas. Em casos graves, pode levar a complicações como hemorragias. A prevenção está diretamente relacionada ao combate ao mosquito transmissor. Eliminar focos de água parada, como pneus, garrafas e caixas d'água destampadas, é fundamental para evitar a proliferação do Aedes aegypti.</p>
                        <img src="" alt="" />
                    </div>
                    <div className='box'>
                        <h2> Chikungunya </h2>
                        <p>
                            Sintomas e Cuidados A Chikungunya também é transmitida pelo Aedes aegypti e seus sintomas incluem febre alta, dor nas articulações e erupções cutâneas. A dor nas articulações pode persistir por semanas ou até meses, afetando a qualidade de vida dos pacientes. O controle do mosquito transmissor é a principal forma de prevenção, e ações de conscientização e eliminação de focos são essenciais para evitar surtos na comunidade.
                        </p>
                    </div>
                    <div className='box'>
                        <h2>Zika</h2>
                        <p>
                            Riscos e Prevenção O Zika é uma doença viral transmitida pelo Aedes aegypti e pode causar febre, erupções na pele e dores no corpo. A principal preocupação em relação ao Zika é o risco de malformações no feto, caso a mulher grávida seja infectada. Além do combate ao mosquito, é importante que as gestantes sigam orientações médicas rigorosas e adotem medidas para evitar a picada do mosquito.
                        </p>
                    </div>
                    <div className='box'>
                        <h2>Ações Comunitárias de Controle </h2>
                        <p>
                            A prevenção das arboviroses depende do esforço coletivo de todos os moradores da comunidade. Para isso, é necessário promover ações de conscientização sobre a importância de eliminar criadouros de mosquitos e adotar hábitos que dificultem a proliferação. Organizar mutirões de limpeza, fiscalizar áreas de risco e garantir a cobertura de depósitos de água são medidas simples, mas eficazes.
                        </p>
                    </div>
                </section>


                <section>
                    <div className='box'>
                        <h2>Como você pode ajudar?</h2>
                        <p>
                            Cada pessoa pode fazer a diferença no combate às arboviroses. Além de eliminar focos de água parada em sua residência, lembre-se de utilizar repelentes e telas de proteção para evitar a picada do mosquito. Ao adotar esses cuidados, você estará contribuindo para a saúde da sua comunidade e ajudando a reduzir a propagação dessas doenças.
                        </p>
                    </div>
                </section>
            </main>

            <footer>

            </footer>

            </>
        
    );
}

export default Home;
