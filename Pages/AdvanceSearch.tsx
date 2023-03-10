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
        <div className="row" style={{ textAlign: 'right' }}>
          <a href="/BasicSearch">Basic Search</a>
        </div>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Advance Search</h4>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="associateId">Associate ID</label>
                  </div>
                  <div className="col-sm-3">
                    <input id="input" />
                  </div>
                  <div className="col-sm-3" />
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="projectId">Project ID</label>
                  </div>
                  <div className="col-sm-3">
                    <input id="input" />
                  </div>
                  <div className="col-sm-3" />
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="ctsManager">CTS Manager</label>
                  </div>
                  <div className="col-sm-3">
                    <input id="input" />
                  </div>
                  <div className="col-sm-3" />
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="eplId">EPL ID</label>
                  </div>
                  <div className="col-sm-3">
                    <input id="input" />
                  </div>
                  <div className="col-sm-3" />
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-3" />
                  <div className="col-sm-3">
                    <label htmlFor="active">Is Associate Active</label>
                  </div>
                  <div className="col-sm-3">
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Active
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Unactive
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-3" />
                </div>
                <br />
                <div className="row" style={{ marginTop: '40px' }}>
                  <div className="col-sm-3" />
                  <div className="col -sm-3">
                    <Button variant="secondary" onClick={() => reset()}>
                      Reset
                    </Button>{' '}
                  </div>
                  <div className="col-sm-3">
                    <Button variant="primary" onClick={() => submit()}>
                      Submit
                    </Button>{' '}
                  </div>
                  <div className="col-sm-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
      </center>
      <br /> <br />
      {showResults && <Inventory />}
    </div>
  );
};

export default AdvanceSearch;
