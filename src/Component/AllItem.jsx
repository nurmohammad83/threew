import React from 'react';
import From from './From';
import Table from './Table';

const AllItem = () => {
    return (
        <section className='bg-success'>
            <div className='bg-primary text-white text-center py-3'>
      <h6>Notice Here</h6>
    </div>

    <div className='px-4 py-5 w-50%' >
      <h1 className="text-primary">Request testenet link</h1>
      <p className='text-muted'>Get testnet LINK for an account on one of the supported blockchain testnets so you can <br /> create and test your own oracle and Chainlinked smart contract</p>
    </div>
    <div className='mx-4 bg-white'>
      <From
    
      />
      <Table/>
    </div>
        </section>
    );
};

export default AllItem;