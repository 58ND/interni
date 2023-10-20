import axios from 'axios'
import React,{useState,useEffect} from 'react'
import sr from "./SecThree.module.css";
import{Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function SecThree() {
    const [prod, setprod] = useState([]);
    useEffect(() => {
      axios.get("https://admin.taffeine.com/api/home/about_product").then((resp)=>{
        let data=resp.data.data;
        setprod(data);
      })
    }, []);
    
  return (
    <div className={sr.main}>
        <Container>
            <Row>
                <Col xs={6}>
                    <h1 className={sr.title}>{prod.title}</h1>
                    <p dangerouslySetInnerHTML={{__html:prod.content}} className={sr.p}></p>
                    <button className={sr.btn}>Подробно</button>
                </Col>
                <Col xs={6}>
                <img src={prod.img} width={"100%"} className={sr.img} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default SecThree