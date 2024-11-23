import './box.scss';

interface MyBoxProps {
    title: string;
    content: string;
}

export default function Box({ title, content }: MyBoxProps) {
    return (
        <div className='box'>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
