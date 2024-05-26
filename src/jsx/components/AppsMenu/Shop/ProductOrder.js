import React, { useEffect, useState } from "react";
import PageTitle from "../../../layouts/PageTitle";
import axios from 'axios';
import { Link } from "react-router-dom";

const ProductOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getAllOrderDetails`);
        console.log("Response from backend:", response);
        setOrders(response?.data?.allOrderDetails);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchAllOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      console.log("Order ID in handleStatusChange:", orderId);
      // Update order status
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/updateOrderStatus`, {
        orderId: orderId,
        newStatus: newStatus,
      });
  
      // Update local state after successful update
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.OrderId === orderId ? { ...order, PaymentStatus: newStatus } : order
        )
      );
      console.log(`Order ID: ${orderId}, New Status: ${newStatus}`);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

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
                      <th className="align-middle">Order</th>
                      <th className="align-middle pr-7">Date</th>
                      <th className="align-middle minw200">Ship To</th>
                      <th className="align-middle text-right">Status</th>
                      <th className="align-middle text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody id="orders">
                    {orders.map((order, index) => (
                      <tr key={order.OrderId} className="btn-reveal-trigger">
                        <td className="py-2">
                          <Link to="/ecom-product-order">
                            <strong>#{index + 1}</strong>
                          </Link>{" "}
                          by <strong>{order.FirstName}</strong>
                          <br />
                          <a href={`mailto:${order.Email}`}>{order.Email}</a>
                        </td>
                        <td className="py-2">{order.createdAt}</td>
                        <td className="py-2">
                          {order.StreetAddress}, {order.StateAddress}, {order.CountryAddress}
                        </td>
                        <td className="py-2 text-right">
                          <select
                            className="form-select"
                            value={order.PaymentStatus}
                            onChange={(e) => handleStatusChange(order.OrderId, e.target.value)}
                          >
                            <option value="On Hold">On Hold</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Processing">Processing</option>
                          </select>
                        </td>
                        <td className="py-2 text-right">${order.Amount}</td>
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

export default ProductOrder;
