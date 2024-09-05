import { Button, Card, Col } from "react-bootstrap";
import { Body } from "./AllMainArticle";
import { useNavigate } from "react-router-dom";


export default function SingleArticle( article: Body) {

    const navigate = useNavigate()
  return (
    <>
      <Col lg={6} className=" d-flex flex-column mb-3">
        <Card className=" flex-grow-1">
          <Card.Img className="img-fluid" style={{height: '200px'}} variant="top" src={article.image_url} />
          <Card.Body className=" d-flex flex-column">
            <Card.Title className=" flex-grow-1">{article.title}</Card.Title>
            <Card.Text>
              <Card.Link  href={article.url} target="_blank">Vai al sito</Card.Link>
            </Card.Text>
            <Button variant="primary" onClick={()=> navigate(`/detail/${article.id}`)}>Vedi dettagli</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
