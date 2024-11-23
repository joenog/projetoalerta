import './box.scss'

export default function Box(props: any) {
    return(
        <div className='box'>
            <img src={props.img} alt="" width={30} height={30}/>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
                
        </div>
    )
}