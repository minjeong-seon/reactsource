import "./Product.css";
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 컴포넌트에서 이미지 삽입하기
// 1) public 폴더에 이미지 넣기
// 2) css 파일 따로 작성 후 url() => src 폴더에 이미지가 존재하는 경우

// 페이지 이동
// 1) a태그
// 2) react 방법 : <Link to = '이동경로'/> | useNavigate()
//    ㄴ> 페이지 이동 시에도 setshoes 설정된 값 유지를 위해서는 useNavigate() 사용

function Product({ shoes, setShoes }) {
  //넘어온 신발 데이터 가져오기
  // props로 받을 때
  // 방법 1 - 나눠서 받기
  // const shoes = props.shoes;
  // const setShoes = props.setShoes;
  // 방법 2 - 한 번에 받기
  // const {shoes, setShoes} = props;

  // 상품 가져오기 횟수 관리(전체 상품 수 이상으로 가져오지 않도록..?)
  const [count, setcount] = useState(0);

  // 로딩중... 관리
  const [loading, setloading] = useState(false);

  // useNavigate를 호출하여 navigate 함수를 가져옴
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="main-bg"></div>
      </div>
      <Container fluid>
        <Row className="mx-3">
          {shoes.map((shoe) => (
            <Col className="mt-3" md={3} key={shoe.id}>
              <div>
                <img src={shoe.src} alt={shoe.alt} className="img-fluid d-block" />
                <div className="px-3 h6">
                  <p className="small">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/detail/" + shoe.id);
                      }}
                    >
                      {shoe.pname}
                    </a>
                  </p>
                  <p className="small">색상 : {shoe.color}</p>
                  <p className="small">가격 : {shoe.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-3 mx-3">
          <Button
            disabled={loading}
            variant="outline-secondary"
            onClick={() => {
              //버튼 클릭 시 로딩중..
              setloading(true);

              let url = "";

              setcount(count + 1);

              if (count === 0) {
                url = "https://jinkyungpark.github.io/product.json";
              } else if (count === 1) {
                url = "https://jinkyungpark.github.io/product2.json";
              } else {
                alert("더 이상 가져올 데이터가 없습니다.");
                setloading(false);
                return;
              }

              axios
                .get(url)
                .then((response) => {
                  console.log(response.data);
                  if (response.data) {
                    //기존의 shoes + 새로운 신발 목록 => 배열 생성
                    let newArr = [...shoes, ...response.data];
                    setShoes(newArr);
                  }
                  setloading(false);
                })
                .catch(() => {
                  console.log("오류 발생");
                  setloading(false);
                });
            }}
          >
            {loading ? "Loading.." : "더보기....."}
          </Button>
        </Row>
      </Container>
    </>
  );
}
export default Product;
