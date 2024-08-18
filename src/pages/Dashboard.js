import React from 'react';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Legend } from 'recharts';
import '../styles/Dashboard.css';
import { FaClipboardList, FaHourglassHalf, FaThumbsUp, FaTimesCircle, FaDollarSign } from 'react-icons/fa';
import { BsCartCheck, BsCartX } from "react-icons/bs";
import { IoBarChart ,IoReceipt} from "react-icons/io5";
import { MdPendingActions } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";


const data = [
  { name: 'Jan', income: 30 },
  { name: 'Feb', income: 20 },
  { name: 'Mar', income: 50 },
  { name: 'Apr', income: 75 },
  { name: 'May', income: 30 },
  { name: 'Jun', income: 20 },
  { name: 'Jul', income: 40 },
  { name: 'Aug', income: 60 },
  { name: 'Sep', income: 50 },
  { name: 'Oct', income: 40 },
  { name: 'Nov', income: 70 },
  { name: 'Dec', income: 60 },
];

const pieData = [
  { name: 'Recent Orders', value: 35, fill: '#8884d8' },  // Purple
  { name: 'Pending Payments', value: 15, fill: '#82ca9d' }, // Light Green
  { name: 'Received Payments', value: 50, fill: '#8dd1e1' }, // Light Blue
];


const Dashboard = () => {
  return (
    <div className='Dashboard'>

      <div className='dashboard-first-box'>
        <span className='dashboard-card'>
          <span className='dashboard-card-info'>
            <span className='card-text'>Recent Orders</span>
            <span className='card-num'>500</span>
          </span>
          <IoReceipt size={25} className='dashboard-card1'/>
        </span>

        <span className='dashboard-card'>
          <span className='dashboard-card-info'>
            <span className='card-text'>Daily Sales</span>
            <span className='card-num'>GHC 2,000</span>
          </span>
          <IoBarChart  size={25} className='dashboard-card2'/>
        </span>

        <span className='dashboard-card'>
          <span className='dashboard-card-info'>
            <span className='card-text'>Pending</span>
            <span className='card-num'>----</span>
          </span>
          <MdPendingActions size={25} className='dashboard-card3'/>
        </span>

        <span className='dashboard-card'>
          <span className='dashboard-card-info'>
            <span className='card-text'>Amount Received</span>
            <span className='card-num'>GHC 30,000</span>
          </span>
          <GiReceiveMoney size={25} className='dashboard-card4'/>
        </span>
      </div>

      <div className='dashboard-second-box'>
        <div className='first-chart'>
        <div className='pie-info'>
            <span>Income</span>
            <span>
            <select>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity={1} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="income" stroke="#8884d8" fill="url(#colorIncome)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>


        <div className='second-chart'>
          <div className='pie-info'>
            <span>Overall Sales</span>
            <span>
            <select>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                label
              />
              <Tooltip />
              <Legend verticalAlign="top" align="right" layout="vertical" />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      <div className='dashboard-third-box'>
        <div className="orders-box">
          <span className="order-order">Orders</span>
          <div className="orders-info">
            <div className="order-item">
              <FaClipboardList className="order-icon order-icon1" />
              <div>
                <span className="order-count">119</span>
                <span className="order-label">Total Orders</span>
              </div>
            </div>
            <div className="order-item">
              <FaHourglassHalf className="order-icon order-icon2" />
              <div>
                <span className="order-count">38</span>
                <span className="order-label">Ongoing Orders</span>
              </div>
            </div>
            <div className="order-item">
              <FaThumbsUp className="order-icon order-icon3" />
              <div>
                <span className="order-count">79</span>
                <span className="order-label">Completed Orders</span>
              </div>
            </div>
            <div className="order-item">
              <FaTimesCircle className="order-icon order-icon4" />
              <div>
                <span className="order-count">37</span>
                <span className="order-label">Order Issues</span>
              </div>
            </div>
            <div className="order-item">
              <FaDollarSign className="order-icon order-icon5" />
              <div>
                <span className="order-count">$7,516,297</span>
                <span className="order-label">Received Amount</span>
              </div>
            </div>
            <div className="order-item">
              <FaDollarSign className="order-icon order-icon6" />
              <div>
                <span className="order-count">$753,004</span>
                <span className="order-label">Remaining Amount</span>
              </div>
            </div>
          </div>
        </div>

        <div className='Orders-result'>
          <div className='month-info'>
            <span className='monthly-orders'>Monthly Orders</span>
            <div>
              <select>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
            </div>

          </div>
          <span className='order-result-box total-orders'>
            <BsCartCheck size={30} className='total-icon' />
            <span className='order-result-info'>
              <span>Total Orders</span>
              <span>16</span>
            </span>
          </span>

          <span className='order-result-box ongoing-orders'>
            <BsCartX size={30} className='ongoing-icon' />
            <span className='order-result-info'>
              <span>Ongoing Orders</span>
              <span>9</span>
            </span>
          </span>

          <span className='order-result-box delivered'>
            <BsCartX size={30} className='delivered-icon' />
            <span className='order-result-info'>
              <span>Delivered Orders</span>
              <span>5</span>
            </span>
          </span>
        </div>
      </div>

      <div className='dashboard-fourth-box'>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Prpduct</th>
                <th>Payment</th>
                <th>Fulfillment</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* {tableData.map((row, index) => ( */}
              <tr>
                <td>0001</td>
                <td>22/22/22</td>
                <td>shirt,prefume,etc..</td>
                <td>Paid</td>
                <td>Delivered</td>
                <td>GHC200</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>22/22/22</td>
                <td>shirt,prefume,etc..</td>
                <td>Paid</td>
                <td>Delivered</td>
                <td>GHC200</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>22/22/22</td>
                <td>shirt,prefume,etc..</td>
                <td>Paid</td>
                <td>Delivered</td>
                <td>GHC200</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>22/22/22</td>
                <td>shirt,prefume,etc..</td>
                <td>Paid</td>
                <td>Delivered</td>
                <td>GHC200</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>22/22/22</td>
                <td>shirt,prefume,etc..</td>
                <td>Paid</td>
                <td>Delivered</td>
                <td>GHC200</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>22/22/22</td>
                <td>shirt,prefume,etc..</td>
                <td>Paid</td>
                <td>Delivered</td>
                <td>GHC200</td>
              </tr>
              <tr>
                <td>0001</td>
                <td>22/22/22</td>
                <td>shirt,prefume,etc..</td>
                <td>Paid</td>
                <td>Delivered</td>
                <td>GHC200</td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
