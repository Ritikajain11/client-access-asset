import * as React from 'react';
import { useState } from 'react';
import Inventory from './Inventory';
import BasicSearch from './BasicSearch';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

const AdvanceSearch = () => {
  const [showResults, updateResults] = useState(false);
  const [selected, updateSelected] = useState('');

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
          <a href="/BasicSearch">Basic Search</a>
        </div> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Advance Search</h5>
                <br />
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="associateId">Associate ID</label>
                  </div>
                  <div className="col-sm-8">
                    <input id="input" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="projectId">Project ID</label>
                  </div>
                  <div className="col-sm-8">
                    <input id="input" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="ctsManager">CTS Manager</label>
                  </div>
                  <div className="col-sm-8">
                    <input id="input" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="eplId">EPL ID</label>
                  </div>
                  <div className="col-sm-8">
                    <input id="input" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="active">Is Associate Active</label>
                  </div>
                  <div className="col-sm-8">
                    <input type="radio" id="radio" />
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

export default AdvanceSearch;
