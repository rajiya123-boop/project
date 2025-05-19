import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
 
function EditField(){
    return(
        <>
       
            <Sidebar/>
           
           
 
        {/* <div className="new-field-container">
           
                    <div className="popup">
            <div className="header">
                <h2>EditField</h2>
                <Link to="/datatable">
              <button className="close-btn">&times;</button>
            </Link>
               
 
                <Route path="/edit" element={<EditField />} />
                <Link to="/edit"><button className="view-btn">View</button></Link>  
            </div> */}
 
 <div className="new-field-container">
                    <div class="popup">
            <div className="headers">
                <h2>View</h2>
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
            <div class="button-group">
                <button class="delete-btn">Delete</button>
                <button class="edit-btn">Edit</button>
            </div>
            </div>
           </div>
           {/* </div>
           </div> */}
       
        </>
    );
};
export default EditField;  