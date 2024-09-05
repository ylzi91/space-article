import { useEffect, useState } from "react";
import { Container, Row, Pagination, Col } from "react-bootstrap";
import SingleArticle from "./SingeArticle";

export interface Body {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: Date;
  updated_at: Date;
  featured: boolean;
}
export default function AllMainArticle() {
  const [tenArticles, setTenArticle] = useState<Body[]>([]);
  const [pages, setPages] = useState(10);
  const [active, setActive] = useState(1);
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=> {
        setActive(number)
        setPages(number * 10)
      }}>
        {number}
      </Pagination.Item>
    );
  }

  async function getArticle() {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=${pages}`
      );
      if (response.ok) {
        const goodFetch = await response.json();
        setTenArticle(goodFetch.results);
      } else {
        throw new Error();
      }
    } catch {
      console.log("Errore");
    }
  }

  useEffect(() => {
    getArticle();
  }, [pages]);

  return (
    <>
      <h1 className="text-center"> Lista Articoli </h1>
      <Container>
        <Row>
            <Col>
                <Pagination>
                    {items}
                </Pagination>
            </Col>
        </Row>
        <Row>
          {tenArticles.map((article) => (
            <SingleArticle {...article} key={article.id} />
          ))}
        </Row>
      </Container>
    </>
  );
}
