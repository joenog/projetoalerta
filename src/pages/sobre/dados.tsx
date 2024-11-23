import './page.scss';
import Menu from '../../components/menu/menu';
import { useEffect, useState } from "react";

type ApiData = {
    data_iniSE: number;
    SE: number;
    casos_est: number;
    pop: number,
    casprov: number,
};

export default function Dados() {

    const [data, setData] = useState<ApiData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const apiUrl = "/apiDados.json";

    const camposSelecionados = ["data_iniSE", "SE", "casos_est", "pop", "casprov"];

    const formatarData = (timestamp: number): string => {
        const data = new Date(timestamp);
        return data.toLocaleDateString("pt-BR");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`Erro ao carregar o arquivo JSON: ${response.status}`);
                }

                const jsonData: ApiData[] = await response.json();
                setData(jsonData);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Carregando dados...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <>
            <header>
                <div className="titleHeader">
                    <h1>PROJETO ALERTA</h1>
                    <p>Previnir salva vidas!</p>
                </div>
                <div>
                    <Menu inicio="Ínicio" dados="Dados" />

                </div>
            </header>

            <main>
                <h2 className="subTitle">Dados Recentes</h2>
                <section>
                    <div>
                        <h1>Dados do último ano, Serra-ES</h1>
                       
                        <table>
                            <thead>
                                <tr>
                                    {camposSelecionados.map((campo) => (
                                        <th key={campo}>{campo}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        {camposSelecionados.map((campo) => (
                                            <td key={campo}>
                                                {campo === "data_iniSE"
                                                    ? formatarData(item[campo as keyof ApiData] as number)
                                                    : item[campo as keyof ApiData] ?? "Vazio"}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>Fonte: https://info.dengue.mat.br/</p>
                    </div>
                </section>
            </main>

            <footer>
                <p>
                    Projeto criado por Joab Nogueira, com o intuito de espalhar informações sobre os cuidados e a prevenção contra o mosquito da dengue. Com a chegada do verão, o número de casos aumenta, e a prevenção é a nossa melhor aliada.
                </p>
                <p>Joenog ©</p>
            </footer>
        </>
    )
};