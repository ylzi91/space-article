import { Card, Col, Container, Row } from "react-bootstrap";
import { Body } from "./AllMainArticle";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function DetailArticle() {
  const [article, setArticle] = useState<Body>();
  const { id } = useParams();

  async function getArticle() {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${id}`
      );
      if (response.ok) {
        const goodFetch = await response.json();
        setArticle(goodFetch.results);
      } else {
        throw new Error();
      }
    } catch {
      console.log("Errore");
    }
  }

  useEffect(()=> {
    getArticle()
  }, [])

  return (
    <>
    
      <Container>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Img variant="top" src={article?.image_url} />
              <Card.Body>
                <Card.Text>
                  {article?.title}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
