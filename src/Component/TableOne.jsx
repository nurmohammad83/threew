import React from 'react';
import { Table } from 'react-bootstrap';

const TableOne = () => {
    return (
        <div className='mt-4' style={{width:'45%'}}>
             <Table className='text-center' striped  bordered >
      <thead>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>12:30 AM	</td>
          <td>483</td>
          <td>@4s8er5s5fe57rjmxnfuewrurks</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10:30 AM</td>
          <td>875</td>
          <td>sf7s7ers4e7r7wser</td>
        </tr>
        <tr>
          <td>3</td>
          <td>11:30 AM</td>
          <td>797</td>
          <td>se4s7er7</td>
        </tr>
      </tbody>
    </Table>
        </div>
    );
};

export default TableOne;