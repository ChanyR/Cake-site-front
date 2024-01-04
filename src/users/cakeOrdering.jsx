import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserHome from './userHome';
import DesignCake from '../general/designCake'
import Paypal from '../general/paypal';
import BakerList from '../bakers/bakersList';
import { AppContext } from '../context/context';
import { Alert } from '@mui/material';
import './cakeOrdering.css'

const steps = ['בחירת אופה', 'עצב עוגה כרצונך', 'תשלום'];

const CakeOrdering = () => {

  const navigate = useNavigate();

  const { chosenBaker, setChosenBaker } = useContext(AppContext);
  const {activeStep, setActiveStep} = useContext(AppContext);
  const [alertMsg, setAlertMsg] = useState(false);

  useEffect(() => {
    setAlertMsg(false);
    if (chosenBaker == null) {
      setActiveStep(0);
    }
  }, [chosenBaker])


  const handleNext = () => {
    if (activeStep == 0 && chosenBaker == null) {
      setAlertMsg(true);
    }
    else {
      setAlertMsg(false);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep == 1) {
      setChosenBaker(null)
    }
    setAlertMsg(false);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    navigate("/home");
  };

  return (
    <div className='allPage'>
      <div>CakeOrdering</div>
      <Box sx={{ width: '100%' }} dir="ltr">
        <Stepper activeStep={activeStep}>
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
              All steps completed - you&apos;re finished
              <p>לשים אישור הזמנה ותמונה של העוגה בדרך אליו</p>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>חזור לדף הבית</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {alertMsg && <Alert severity="error" style={{ marginBottom: '10px' }}>{activeStep == 0 && <p>בחר אופה</p>}</Alert>}
              {activeStep == 0 && <BakerList />}
              {activeStep == 1 && <DesignCake />}
              {activeStep == 2 && <Paypal />}

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