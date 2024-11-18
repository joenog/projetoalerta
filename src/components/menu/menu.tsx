import './menu.scss'
import Link from 'next/link'

export default function Menu(props:any) {
    return(

        <div className="menu">
        <ul>
                <li> <Link href="/"> {props.inicio} </Link> </li>
                <li> <Link href="/sobre"> {props.dados} </Link> </li>
        </ul>
    </div>
    )
}