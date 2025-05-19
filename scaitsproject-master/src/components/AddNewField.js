import { useState } from 'react';
import SideBar from './sidebar';
import { Link } from 'react-router-dom';
 
function NewField(){
 
 
    return(
        <>
            <SideBar/>
        <div className="new-field-container">
                    <div class="popup">
            <div className="headers">
                <h2>Add New Field</h2>
                <Link to="/dashboard"><button className="close-btn">&times;</button></Link>
            </div>
            <div className="form-row">
                <div className="form-group small">
                <label>Campus ID</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
                <div className="form-group small">
                <label>Campus Code</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
                <div className="form-group medium">
                <label>Campus Name</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
            </div>
 
            <div className="form-row">
                <div className="form-group small">
                <label>Campus Type</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
                <div className="form-group small">
                <label>Code</label>
                <input type="text" placeholder='Enter Value'/>
                </div>
                <div className="form-group medium">
                <label>Status</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
            </div>
            <div className="form-row">
                <div className='form-group big'>
                    <label>Address Dno</label>
                    <input type='text' placeholder='Enter Value'></input>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group medium">
                <label>Land Mark</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
                <div className="form-group small">
                <label>Location</label>
                <input type="text"placeholder='Enter Value'/>
                </div>
                <div className="form-group small">
                <label>Pin</label>
                <input type="text" placeholder='Enter Value'/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group medium">
                <label>Name</label>
                <input type="text" placeholder="Enter Value"/>
                </div>
                <div className="form-group small">
                <label>Street ID</label>
                <input type="text" placeholder='Enter Value'/>
                </div>
                <div className="form-group small">
                <label>City ID</label>
                <input type="text" placeholder='Enter Value'/>
                </div>
            </div>
            <div className='form-row'>
                <div className='form-group medium'>
                    <label>Country ID</label>
                    <input type='text'placeholder='Enter Value'></input>
                </div>
            </div>
            <div className="button-group">
                <button className="delete-btn">Cancel</button>
                <button className="edit-btn">Add Field</button>
            </div>
            </div>
        </div>
        </>
    );
};
export default NewField;