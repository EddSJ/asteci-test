import React from "react";
import { openModal } from "../redux/modal/modalSlice";
import { fillModal } from "../redux/modal/modalContentSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



const CardData = (props) => {

    const dispatch = useDispatch();
    
    const { _id, cityid, name, state,  probabilityofprecip, relativehumidity, lastreporttime  } = props.data;
    function llovera(probabilityofprecip, relativehumidity) {
        if (probabilityofprecip > 60 || relativehumidity > 50) {
            const lluvia = 'Si llovera';
            return lluvia;
        } else {
            const lluvia = 'No llovera';
            return lluvia;
        }
    }

    const startModal = () => {
        dispatch(openModal());
        dispatch(fillModal(props.data));
    }



    return (
        <div className="row">
            <p className="btn" onClick={startModal}>{_id}</p>
            <p>{cityid}</p>
            <p>{name}</p>
            <p>{state}</p>
            <p>{probabilityofprecip}</p>
            <p>{relativehumidity}</p>
            <p>{lastreporttime}</p>
            <p>{llovera(probabilityofprecip, relativehumidity)}</p>
        </div>
    )
}

export default CardData;