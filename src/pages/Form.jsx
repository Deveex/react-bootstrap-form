import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { countries } from '../data/countries';
import { services } from '../data/services';
import { genders } from '../data/genders';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('None');
    const [country, setCountry] = useState('None');
    const [selectedServices, setSelectedServices] = useState([]);

    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedServices([...selectedServices, value]);
        } else {
            setSelectedServices(selectedServices.filter(service => service !== value));
        }
    };

    function submitInfo(e) {
        e.preventDefault();
        console.log(`Firstname: ${firstName} \nMiddle Name: ${middleName} \nLast Name: ${lastName} \nEmail: ${email} \nGender: ${gender} \nServices: ${selectedServices} \nCountry: ${country}`);
    }

    return (
        <div className="container" onSubmit={submitInfo}>
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">Registration Form</h5>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="firstname" placeholder="" required onChange={(e) => setFirstName(e.target.value)} />
                                    <label htmlFor="firstname">First Name <span>*</span></label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="middlename" placeholder="" onChange={(e) => setMiddleName(e.target.value)} />
                                    <label htmlFor="middlename">Middle Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="lastname" placeholder="" onChange={(e) => setLastName(e.target.value)} required />
                                    <label htmlFor="lastname">Last Name <span>*</span></label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)} required />
                                    <label htmlFor="email">E-mail Address <span>*</span></label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="phone" placeholder="(000) 000-0000" onChange={(e) => setPhone(e.target.value)} />
                                    <label htmlFor="phone">Phone Number</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <h5>Gender</h5>
                                    <div className="form-check">
                                        {genders.map((item) => {
                                            return (
                                                <div key={item.id}>
                                                    <input className="form-check-input" type="radio" name="gender" value={item.name} onChange={(e) => setGender(e.target.value)} />
                                                    <label className="form-check-label" htmlFor="gender">{item.name}</label><br />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <h5>Country</h5>
                                    <select name="" id="" className='form-select' onChange={(e) => setCountry(e.target.value)}>
                                        <option value="">Select Country</option>
                                        {countries.map((item) => {
                                            return <option key={item.code} value={item.name}>{item.name}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="form-floating mb-3">
                                    <h5>Services</h5>
                                    <div className="form-check">
                                        {services.map((item) => {
                                            return (
                                                <div key={item.id}>
                                                    <input type="checkbox" value={item.name} className='form-check-input' onChange={handleServiceChange} />
                                                    <label>{item.name}</label><br />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                        Remember password
                                    </label>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
