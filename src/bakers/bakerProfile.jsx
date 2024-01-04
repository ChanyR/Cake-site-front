import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { basesList, decorationList } from '../services/functionApiService';

function BakerProfile() {
    const [decorationListDB, setDecorationsListDB] = useState(null);
    const [decorations, setDecorations] = useState(null);
    const [bases, setBases] = useState(null);
    const [baseListDB, setBaseListDB] = useState(null);
    const [changeDecoration, setChangeDecoration] = useState(null);
    const [changeBase, setChangeBase] = useState(null);


    useEffect(async () => {
        console.log('Effect is running');
        await fetchDataDecoration();
        await fetchDataBase();
    }, []);

    const fetchDataDecoration=async()=>{
        let decorationListData=await decorationList();
        console.log(decorationListData);
        setDecorationsListDB(decorationListData);
        let arry=[]
        for(let i=0;i<decorationListData.length;i++){
           arry.push(false)
        }
        setDecorations(arry);
    }
    // const fetchDataDecoration = async () => {
    //     let decorationListData = await decorationList();
    //     console.log(decorationListData);
    //     setDecorationsListDB(decorationListData);
    //     let arry = decorationListData.map(() => false);
    //     setDecorations(arry);
    //     console.log(decorations);
    // }


    const fetchDataBase=async()=>{
        let baseListData=await basesList();
        console.log(baseListData);
        setBaseListDB(baseListData);
        let arry=[]
        for(let i=0;i<baseListData.length;i++){
            arry.push(false);
        }
        setBases(arry);
    }
    // const fetchDataBase = async () => {
    //     let baseListData = await basesList();
    //     console.log(baseListData);
    //     setBaseListDB(baseListData);
    //     let arry = baseListData.map(() => false);
    //     setBases(arry);
    //     console.log(bases);
    // }


    const handleDecorationsChange1 = (event) => {
        let arry = []
        for (let i = 0; i < decorationListDB.length; i++) {
            arry.push(event.target.checked);
        }
        setDecorations(arry);
        // setDecorations([event.target.checked, event.target.checked]);
    };

    const handleDecorationsChange2 = (event) => {
        let arry = decorations;
        arry[changeDecoration] = event.target.checked;
        setDecorations(arry);
        setChangeDecoration(null);
        // setDecorations([event.target.checked, decorations[1]]);
    };

    // const handleDecorationsChange3 = (event) => {
    //     setDecorations([decorations[0], event.target.checked]);
    // };

    const handleBasesChange1 = (event) => {
        let arry = []
        for (let i = 0; i < baseListDB.length; i++) {
            arry.push(event.target.checked);
        }
        setBases(arry);
        // setBases([event.target.checked, event.target.checked]);
    };

    const handleBasesChange2 = (event) => {
        let arry = bases;
        arry[changeBase] = event.target.checked;
        setBases(arry);
        console.log(arry);
        console.log(changeBase);
        setChangeBase(null);
        // setBases([event.target.checked, bases[1]]);
    };

    // const handleBasesChange3 = (event) => {
    //     setBases([bases[0], event.target.checked]);
    // };

    const decorationsChildren = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          {decorationListDB != null &&
            decorationListDB.map((item, i) => (
              <FormControlLabel
                label={item.decoration}
                // key={i}
                control={
                  <Checkbox
                    checked={decorations[i]}
                    onChange={() => {
                    //   setChangeDecoration(i);
                      handleDecorationsChange2;
                    }}
                  />
                }
              />
            ))}
        </Box>
      );
      

      const basesChildren = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          {baseListDB != null &&
            baseListDB.map((item, i) => (
              <FormControlLabel
                label={item.cake_base}
                key={i}
                control={
                  <Checkbox
                    checked={bases[i]}
                    onChange={() => {
                      setChangeBase(i);
                      handleBasesChange2;
                    }}
                  />
                }
              />
            ))}
        </Box>
      );

    return (
        <div>
            <FormControlLabel
                label="בסיסי עוגה"
                control={
                    <Checkbox
                        checked={false}
                        indeterminate={bases&&bases[0] !== bases[1]}
                        onChange={handleBasesChange1}
                    />
                }
            />
            {basesChildren}
            <FormControlLabel
                label="קישוטי עוגה"
                control={
                    <Checkbox
                        checked={false}
                        indeterminate={decorations&&decorations[0] !== decorations[1]}
                        onChange={handleDecorationsChange1}
                    />
                }
            />
            {decorationsChildren}
        </div>
    );
}

export default BakerProfile

