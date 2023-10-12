import React from 'react';
import Test2 from './Test2';

function Test1({list}) {
  return (
    <div>
      <table
            border="1px solid black"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>id</th>
                <th>ten san pham</th>
                <th>hinh anh</th>
                <th>gia</th>
                <th>da ban</th>
                <th>doanh thu</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.id}>
                  <Test2 item={item}></Test2>
                  
                </tr>
              ))}
            </tbody>
          </table>
      
    </div>
  );
}

export default Test1;