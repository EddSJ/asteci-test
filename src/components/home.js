import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { storeData } from '../redux/data/dataSlice';

import DisplayData from "./displayData";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios.get('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
            .catch(err => console.log(err));
            console.log(result.data);
            dispatch(storeData(result.data));
        }
        fetchData();
    }, []);


    return (
        <DisplayData />
    )
}

export default Home;