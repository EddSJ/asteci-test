import ReactModal from "react-modal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, stateOfModal } from "../redux/modal/modalSlice";
import { clearModal } from "../redux/modal/modalContentSlice";
import { currentModalContent } from "../redux/modal/modalContentSlice";

const DataDetails = () => {
    const dispatch = useDispatch();

    const sModal = useSelector(stateOfModal);

    const customeStyles = {
        content: {
            // top: "50%",
            left: "25%",
            // marginRight: "-50%",
            width: "600px",
            height: "500px"
        },
        overlay: {
            backgroundColor: "rgba(1, 1, 1, 0.75)"
        }
    }

    const stopModal = () => {
        dispatch(closeModal());
        dispatch(clearModal());
    }

    const data = useSelector(currentModalContent);

    function llovera(probabilityofprecip, relativehumidity) {
        if (probabilityofprecip > 60 || relativehumidity > 50) {
            const lluvia = 'Si llovera';
            return lluvia;
        } else {
            const lluvia = 'No llovera';
            return lluvia;
        }
    }

    const { _id, cityid, name, state, probabilityofprecip, relativehumidity, lastreporttime } = data;

    return (
        <ReactModal
            isOpen={sModal}
            onRequestClose={stopModal}
            style={customeStyles}
            ariaHideApp={false}
            >
                <div>
                    <h1>Detalles</h1>
                    <p>Id: {_id}</p>
                    <p>Id ciudad: {cityid}</p>
                    <p>Nombre: {name}</p>
                    <p>Estado: {state}</p>
                    <p>Precipitacion: {probabilityofprecip}</p>
                    <p>Humedad: {relativehumidity}</p>
                    <p>Ultimo Reporte: {lastreporttime}</p>
                    <p>{llovera(probabilityofprecip, relativehumidity)}</p>
                </div>
            </ReactModal>
    )
}

export default DataDetails;