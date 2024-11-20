import React, { useEffect, useState } from "react";

type ApiData = {
    data_iniSE: number;
    SE: number;
    casos_est: number;
    // Continue com o restante dos campos...
};

const App: React.FC = () => {
    const [data, setData] = useState<ApiData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const apiUrl = "src/pages/sobre/apiDados.json"; // Caminho para o JSON na pasta public

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
        <div>
            <h1>Dados do JSON</h1>
            <table>
                <thead>
                    <tr>
                        {data.length > 0 &&
                            Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {Object.values(item).map((value, i) => (
                                <td key={i}>{value !== null ? value : "N/A"}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
