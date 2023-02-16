import Table from "react-bootstrap/Table";
import React from "react";
import "./style.scss";

const order = () => {
  return (
    <>
      <div className="order-top">
        <h3 className="order-top-title">Мои заказы</h3>
      </div>
      <div className="order-panel rounded  shadow border">
        <Table striped hover variant="dark" className="table m-0 ">
          <thead>
            <tr>
              <th>#</th>
              <th>Номер заказа</th>
              <th>Дата заказа</th>
              <th>Сумма</th>
              <th>Статус</th>
              <th>Действии</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>B162901</td>
              <td>24-07-2022 в 05:03:16</td>
              <td>49 000 сум</td>
              <td className="p-0 text-center">
                <button className="btn btn-warning admin-btn text-white mt-2 py-0 px-4">
                  Доставлен
                </button>
              </td>
              <td className="p-0 text-center ">
                <button className="btn btn-info admin-btn text-white mt-2 py-0 px-4">
                  details
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>B162901</td>
              <td>24-07-2022 в 05:03:16</td>
              <td>49 000 сум</td>
              <td className="p-0 text-center">
                <button className="btn btn-warning admin-btn text-white mt-2 py-0 px-4">
                  Доставлен
                </button>
              </td>
              <td className="p-0 text-center ">
                <button className="btn btn-info admin-btn text-white mt-2 py-0 px-4">
                  details
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>B92939</td>
              <td>07-10-2021 в 16:50:44</td>
              <td>59 000 сум</td>
              <td className="p-0 text-center">
                <button className="btn admin-btn btn-warning text-white mt-2 py-0 px-4">
                  Доставлен
                </button>
              </td>
              <td className="p-0 text-center ">
                <button className="btn btn-info admin-btn text-white mt-2 py-0 px-4">
                  details
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default order;
