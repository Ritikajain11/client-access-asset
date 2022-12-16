import * as React from 'react';
import { useState } from 'react';
import Inventory from './Inventory';
import AdvanceSearch from './AdvanceSearch';
import Dropdown from 'react-bootstrap/Dropdown';
import './BasicSearch.css';
import { Button } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

const BasicSearch = () => {
  const [showResults, updateResults] = useState(false);
  const [selected, updateSelected] = useState('');

  const data = [
    {
      value: 1,
      label: 'CTS Employee ID',
    },
    {
      value: 2,
      label: 'CTS Email ID',
    },
    {
      value: 3,
      label: 'AMEX Email ID',
    },
    {
      value: 4,
      label: 'AMEX Contractor ID',
    },
    {
      value: 5,
      label: 'Serial Number',
    },
  ];

  const submit = () => {
    updateResults(true);
  };

  const reset = () => {
    updateSelected('');
    updateResults(false);
  };

  const handleChange = (e) => {
    updateSelected(e.target.value);
  };

  return (
    <div>
      <center>
        <h2 style={{ marginTop: '10px', marginBottom: '50px' }}>
          Client Asset Access
        </h2>
        {/* <div
          className="row"
          style={{ textAlign: 'right', textDecoration: 'none' }}
        >
          <a href="/AdvanceSearch">Advance Search</a>
        </div> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Basic Search</h5>
                <br />
                <div className="row">
                  <div className="col-sm-4">
                    <Dropdown onChange={handleChange}>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        value={selected}
                      >
                        Select One
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item value="ctsEmployeeId">
                          CTS Employee ID
                        </Dropdown.Item>
                        <Dropdown.Item value="ctsEmailId">
                          CTS Email ID
                        </Dropdown.Item>
                        <Dropdown.Item value="amexEmailId">
                          AMEX Email ID
                        </Dropdown.Item>
                        <Dropdown.Item value="amexContractorId">
                          AMEX Contractor ID
                        </Dropdown.Item>
                        <Dropdown.Item value="serialNumber">
                          Serial Number
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="col-sm-8">
                    <input id="input" />
                  </div>
                </div>
                <div className="row" style={{ marginTop: '40px' }}>
                  <div className="col-sm-5" />
                  <div className="col">
                    <Button variant="secondary" onClick={() => reset()}>
                      Reset
                    </Button>{' '}
                  </div>
                  <div className="col">
                    <Button variant="primary" onClick={() => submit()}>
                      Submit
                    </Button>{' '}
                  </div>
                  <div className="col-sm-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
      <br /> <br />
      {showResults && <Inventory />}
    </div>
  );
};

export default BasicSearch;
