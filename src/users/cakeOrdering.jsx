import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

import DesignCake from '../general/designCake'
import BakerList from '../bakers/bakersList';
import { AppContext } from '../context/context';
import './cakeOrdering.css'
import Payment from './payment';
import ComplateOrdering from './complateOrdering';

const steps = ['CHOOSE PASTRY CHEF', 'DESIGN YOUR CAKE', 'PAYMENT'];

const CakeOrdering = () => {

  const navigate = useNavigate();

  const { chosenBaker, setChosenBaker } = useContext(AppContext);
  const { activeStep, setActiveStep } = useContext(AppContext);
  const { total, setTotal } = useContext(AppContext);
  const { isPay, setIsPay } = useContext(AppContext);

  const [alertMsg, setAlertMsg] = useState(false);
  const [alertMsg2, setAlertMsg2] = useState(false);
  const [alertMsg3, setAlertMsg3] = useState(false);

  useEffect(() => {
    setAlertMsg(false);
    setAlertMsg2(false);
    setAlertMsg3(false);
    if (chosenBaker == null) {
      setActiveStep(0);
    }
  }, [chosenBaker])


  const handleNext = () => {
    if (activeStep == 0 && chosenBaker == null) {
      setAlertMsg(true);
    }
    else if (activeStep == 1 && total == 0) {
      setAlertMsg2(true);
    }
    else if (activeStep == 2 && isPay == false) {
      setAlertMsg3(true);
    }
    else {
      setAlertMsg(false);
      setAlertMsg2(false);
      setAlertMsg3(false);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep == 1) {
      setChosenBaker(null)
    }
    else if (activeStep == 2) {
      setIsPay(false)
    }
    setAlertMsg(false);
    setAlertMsg2(false);
    setAlertMsg3(false);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    navigate("/home");
  };

  return (
    <div className='allPage pt-4' style={{}}>
      <Box sx={{ marginTop: "0px" }} dir="ltr">
        <Stepper activeStep={activeStep} sx={{ width: '85%' }} style={{ margin: "0 auto" }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              <ComplateOrdering />
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>HOME PAGE</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} style={{ width: "65%", margin: "0 auto" }} >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
            <Typography sx={{ mt: 2, mb: 1 }} >
              {alertMsg && <Alert severity="error" style={{ width: "50%", height: "50px", margin: "0 auto" }}>{activeStep == 0 && <p style={{ marginBottom: "0px" }}>PASTRY CHEF</p>}</Alert>}
              {alertMsg2 && <Alert severity="error" style={{ width: "50%", height: "50px", margin: "0 auto" }}>{activeStep == 1 && <p style={{ marginBottom: "0px" }}>Choose a cake as you wish</p>}</Alert>}
              {alertMsg3 && <Alert severity="error" style={{ width: "50%", height: "50px", margin: "0 auto" }}>{activeStep == 2 && <p style={{ marginBottom: "0px" }}>You need to make a payment</p>}</Alert>}
              {activeStep == 0 && <BakerList />}
              {activeStep == 1 && <DesignCake />}
              {activeStep == 2 && <Payment />}

            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  )
}

export default CakeOrdering