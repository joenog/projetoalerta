import './menu.scss'
import Link from 'next/link'

export default function Menu(props:any) {
    return(

        <div className="menu">
        <ul>
                <li> <Link href="/index"> {props.inicio} </Link> </li>
                <li> <Link href="/sobre"> {props.sobre} </Link> </li>
        </ul>
    </div>
    )
}