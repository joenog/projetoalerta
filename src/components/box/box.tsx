import './box.scss'

export default function Box(props:any) {
    return(
        <div className='box'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}