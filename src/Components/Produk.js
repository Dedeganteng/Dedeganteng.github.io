import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import c1 from './Hazard.jpg';

const Produk = () => {
    return (
    <div style={{ marginLeft:'5rem', marginRight:'5rem', marginTop:'5rem'}}>
        <Card style={{ width: '20rem', flexDirection:'row',  marginLeft:'2rem', marginRight:'2rem',}}>
            <Card.Img variant="top" src={c1}/>
            <div style={{margin: '1rem' }}>
            <h1>STL-095</h1>
            <p>Senjata Nuklir yang telah diisikan ANTIMATER</p>
            <Button variant="outline-dark">Buy!!!!</Button>
            </div>
            
            <Card.Img style={{marginLeft:'11rem'}} variant="top" src={c1}/>
            <div style={{margin: '1rem',marginLeft:'2rem'}}>
            <h1>STL-095</h1>
            <p>Senjata Nuklir yang telah diisikan ANTIMATER</p>
            <Button variant="outline-dark">Buy!!!!</Button>
            </div>

        </Card>
        <br />
        <Card style={{ width: '20rem', flexDirection:'row',  marginLeft:'2rem', marginRight:'2rem'}}>
            <Card.Img variant="top" src={c1}/>
            <div style={{margin: '1rem' }}>
            <h1>STL-095</h1>
            <p>Senjata Nuklir yang telah diisikan ANTIMATER</p>
            <Button variant="outline-dark">Buy!!!!</Button>
            </div>
            <Card.Img style={{marginLeft:'11rem'}} variant="top" src={c1}/>
            <div style={{margin: '1rem', marginLeft:'2rem' }}>
            <h1>STL-095</h1>
            <p>Senjata Nuklir yang telah diisikan ANTIMATER</p>
            <Button variant="outline-dark">Buy!!!!</Button>
            </div>
        </Card>
    </div>
    )
}
export default Produk