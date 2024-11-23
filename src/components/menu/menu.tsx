import './menu.scss'
import Link from 'next/link'

interface MenuProps {
    inicio: string;
    dados: string;
}

export default function Menu({ inicio, dados }: MenuProps) {
    return (
        <div className="menu">
            <ul>
                <li> <Link href="/"> {inicio} </Link> </li>
                <li> <Link href="/sobre/dados"> {dados} </Link> </li>
            </ul>
        </div>
    );
}
