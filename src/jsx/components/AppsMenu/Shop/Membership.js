import React, { useEffect, useState } from "react";
import PageTitle from "../../../layouts/PageTitle";
import axios from 'axios';
import { Link } from "react-router-dom";

const Membership = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getAllMembersDetails`);
        console.log("Response from backend:", response);
        setOrders(response?.data?.allOrderDetails);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchAllOrders();
  }, []);

  

  return (
    <div className="h-80">
      <PageTitle activeMenu="Product Order" motherMenu="Shop" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body py-0 px-3">
              <div className="table-responsive">
                <table className="table table-sm mb-0 table-responsive-lg text-black">
                  <thead>
                    <tr>
                      <th className="align-middle">Client ID</th>
                      <th className="align-middle pr-7">Date</th>
                      <th className="align-middle minw200">Duration(In Days)</th>
                      <th className="align-middle text-right">Is Active?</th>
                      <th className="align-middle text-right">Type</th>
                      <th className="align-middle text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody id="orders">
                    {orders.map((order, index) => (
                      <tr key={order.OrderId} className="btn-reveal-trigger">
                        <td className="py-2">
                          <Link to="/ecom-product-order">
                            <strong>#{order.clientId}</strong>
                          </Link>{" "}
                    
                          <br />
                      
                        </td>
                        <td className="py-2">{order.createdAt}</td>
                        <td className="py-2">
                          {order.duration}
                        </td>
                        <td className="py-2 text-right">
                        {order.isActive ? "Yes" : "No"}
                        </td>
                        <td className="py-2 text-right">
                          {order.name}
                        </td>
                        <td className="py-2 text-right">${order.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
