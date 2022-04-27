import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SideNav from "../../components/SideNav/SideNav";
import ManageStepper from "./ManageStepper";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

function ManageForm({ userdata }) {

  const [eventType, setEventType] = useState('')
  const [eventTitle, setEventTitle] = useState('')
  const [focusSkill, setFocusSkill] = useState([])
  const [desc,setDesc] = useState('')
  const [requirements,setRequirements] = useState('')
  const [contents,setContents] = useState('')
  const [numOfSessions, setNumOfSessions] = useState(1)
  const [maxParticipants,setMaxParticipants] = useState(1)
  const [language,setLanguage] = useState('')

  const [sessionDetails,setSessionDetails] = useState([])

  const [paymentMode, setPaymentMode] = useState('')
  const [feesPerParticipants,setFeesPerParticipants] = useState('')
  const [amount, setAmount] = useState('')
  
  const [assignmentType,setAssignmentType] = useState('')
  const [assignmentName,setAssignmentName] = useState('')
  const [assignmentDescription,setAssignmentDescriptionn] = useState('')

  const [uploadedDocs,setUploadedDocs] = useState('')
  const [uploadedDocsId,setUploadedDocsId] = useState('')

  const [activationDate,setActivationDate] = useState('')
  const [dueDate,setDueDate] = useState('')

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
                {step === 1 && <Step1 eventType={eventType} setEventType={setEventType} eventTitle={eventTitle} setEventTitle={setEventTitle} />}
                {step === 2 && <Step2 eventTitle={eventTitle} setEventTitle={setEventTitle} focusSkill={focusSkill} setFocusSkill={setFocusSkill}
                desc={desc} setDesc={setDesc} requirements={requirements} setRequirements={setRequirements} contents={contents} setContents={setContents}
                numOfSessions={numOfSessions} setNumOfSessions={setNumOfSessions} maxParticipants={maxParticipants}
                setMaxParticipants={setMaxParticipants} language={language} setLanguage={setLanguage}
                />}
                {step === 3 && <Step3 numOfSessions={numOfSessions} setSessionDetails={setSessionDetails}/>}
                {step === 4 && <Step4 setFeesPerParticipants={setFeesPerParticipants} setPaymentMode={setPaymentMode} setAmount={setAmount} />}
                            

               {step!==4 && <div className='d-flex justify-content-end my-2 pt-2 px-5'>
                    <button className='btn px-3 py-2 btn-light round_btn' onClick={() => setstep(prev => prev - 1)} style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'grey', width: '130px', fontWeight: '600' }}>Back</button>
                    <button className='btn px-3 py-2 btn-primary round_btn' onClick={() => setstep(prev => prev + 1)} style={{ "padding": "0 20px", fontWeight: '600', width: '130px', marginLeft: '20px' }}> Continue</button>
                </div>}

                {step===4 && <div className='d-flex justify-content-end my-2 pt-2 px-5'>
                    <button className='btn px-3 py-2 btn-primary round_btn' onClick={() => setstep(prev => prev - 1)} style={{ "padding": "0 20px", fontWeight: '600', width: '130px', marginLeft: '20px' }}> Back</button>
                    <button className='btn px-3 py-2 btn-light round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'grey', width: '130px', fontWeight: '600', margin: '0 20px' }}>Save</button>
                    <Link to="/Assignment" ><button className='btn px-3 py-2 btn-primary round_btn' onClick={() => setstep(prev => prev + 1)} style={{ "padding": "0 20px", fontWeight: '600', width: '130px'}}> Publish</button></Link>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ManageForm;
