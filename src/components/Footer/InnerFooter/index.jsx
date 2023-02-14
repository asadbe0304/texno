import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Img from "../../../assets/images/rating.png";
import "./style.scss";
const index = () => {
  return (
    <>
      <div className="page-footer bg-warning">
        <div className="container">
          <div className="page-footer-sub py-4 d-flex justify-content-between align-items-start gap-2">
            <div className="page-sub d-flex justify-content-between align-items-start gap-2">
              <div className="d-flex justify-content-between align-items-start gap-3 flex-column">
                <h3 className="fw-bold ">Будьте в курсе</h3>
                <p className="">
                  Подпишитесь на наши обновления и узнавайте о новинках, акциях
                  и специальных предложениях первыми
                </p>
              </div>
              <div className="d-flex justify-content-between flex-column align-items-start gap-3">
                <InputGroup className="">
                  <Form.Control
                    placeholder=""
                    aria-label=""
                    aria-describedby="basic-addon2"
                    className="footer-sub-form"
                  />
                    <button className="btn btn-danger btn-submits">Submit</button>
                </InputGroup>
                <p className="text-secondary">
                  Нажимая на кнопку «Подписаться», вы соглашаетесь на обработку
                  персональных данных и соглашаетесь с офертой
                </p>
              </div>
            </div>
            <div>
              <img width={200} height={125} src={Img} alt="images yandex" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
