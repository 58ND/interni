import axios from 'axios'
import React,{useState,useEffect} from 'react'
import sr from "./SecFour.module.css";
import{Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function SecFour() {
    const [prod, setprod] = useState([]);
    useEffect(() => {
      axios.get("https://admin.taffeine.com/api/home/product_composition").then((resp)=>{
        let data=resp.data.data;
        setprod(data);
      })
    }, []);
    
  return (
    <div className={sr.main}>
        <Container>
        <h1 className={sr.title}>{prod.title}</h1>
            <Row>
                <Col xs={6} className={sr.Col}>
                  <img src={prod.img} width={"310px"} height={"407px"} className={sr.img} alt="" />
                </Col>
                <Col xs={6} className={sr.Col}>
                  <div className={sr.man}>
                    <p dangerouslySetInnerHTML={{__html:prod.content}} className={sr.p}></p>
                    <div className={sr.bttn}>
                      <button class={sr.btn}> Купить онлайн </button>
                      <button class={sr.bn}> Найти в аптеках </button>
                    </div>
                  </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default SecFour