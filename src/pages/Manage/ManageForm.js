import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SideNav from "../../components/SideNav/SideNav";
import ManageStepper from "./ManageStepper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

function ManageForm({ userdata }) {
  const [step, setstep] = useState(1);
  const getStep = (item) => {
    setstep(item);
  };
  console.log(step);

  return (
    <>
      <Navbar userdata={userdata} />
      <div>
        <div className="container-fluid px-1 Manage">
          <div className="row justify-content-center">
            <div className="row">
              <SideNav />
              <div
                style={{ width: "1245px", textAlign: "left" }}
                className="container "
              >
                <ManageStepper getStep={getStep} steps={step} />
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
                {step === 3 && <Step3 />}
                {step === 4 && <Step4 />}
                            

               {step!==4 && <div className='d-flex justify-content-end my-2 pt-2 px-5'>
                    <button className='btn px-3 py-2 btn-light round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'grey', width: '130px', fontWeight: '600' }}>Back</button>
                    <button className='btn px-3 py-2 btn-primary round_btn' onClick={() => setstep(prev => prev + 1)} style={{ "padding": "0 20px", fontWeight: '600', width: '130px', marginLeft: '20px' }}> Continue</button>
                </div>}

                {step===4 && <div className='d-flex justify-content-end my-2 pt-2 px-5'>
                    <button className='btn px-3 py-2 btn-primary round_btn' onClick={() => setstep(prev => prev + 1)} style={{ "padding": "0 20px", fontWeight: '600', width: '130px', marginLeft: '20px' }}> Back</button>
                    <button className='btn px-3 py-2 btn-light round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'grey', width: '130px', fontWeight: '600', margin: '0 20px' }}>Save</button>
                    <button className='btn px-3 py-2 btn-primary round_btn' onClick={() => setstep(prev => prev + 1)} style={{ "padding": "0 20px", fontWeight: '600', width: '130px'}}> Publish</button>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageForm;
