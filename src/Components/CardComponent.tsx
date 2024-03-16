import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Pages/style/home.css'

export type Iinfo = {
    pic: string
    alt: string
    desc: string
    name: string
    click: () => void
}

function CardComponent(props: Iinfo) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img className='cardImgSize' alt={props.alt} variant="top" src={props.pic} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variant="primary" onClick={props.click}>Learn More</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;