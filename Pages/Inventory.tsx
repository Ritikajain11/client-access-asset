import * as React from 'react';
import Button from 'react-bootstrap/Button';

const Inventory = () => {
  return (
    <div>
      <table className="table  table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">User First Name</th>
            <th scope="col">User Last Name</th>
            <th scope="col">Project Id</th>
            <th scope="col">Asset Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>San</td>
            <td>Andrew</td>
            <td>1290399</td>
            <td>BYOPJ78675</td>
            <td>
              <Button>View</Button> <Button href="/updateAsset/1">Edit</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
