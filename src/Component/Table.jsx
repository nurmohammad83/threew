import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import TableOne from './TableOne';

const Table = () => {
    return (
        <div className='p-4'>
            <h6 className='text-primary'>Request History</h6>
            <Row style={{width:'40%'}}>
                <Col>
                <Button variant="primary">EHT Transaction History</Button>{' '}
                </Col>
                <Col>
                <Button variant="primary">TestLink Transaction History</Button>{' '}
                </Col>
            </Row>
       <TableOne/>
        </div>
    );
};

export default Table;