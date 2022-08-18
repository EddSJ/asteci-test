import React from "react";
import { useSelector } from "react-redux/";
import { getAllData } from "../redux/data/dataSlice";

import CardData from "./cardData";
import DataDetails from "./dataDetails";

const DisplayData = () => {

    const data = useSelector(getAllData);

    let renderData = "";

    renderData = data.results.length > 0
    ? (data.results.map(dat => {
        console.log(dat)
        return <CardData data={dat} key={dat._id} />
    })) : (
        <div>
            <h1>
                No records found
            </h1>
        </div>
    )

    return (
        <div className="dataWrapper">
            <div className="header-rows">
                <h4>Id</h4>
                <h4>Id ciudad</h4>
                <h4>Nombre</h4>
                <h4>Estado</h4>
                <h4>Probabilidad Precipitacion</h4>
                <h4>Humedad</h4>
                <h4>Ultimo reporte</h4>
                <h4>Llovera</h4>
            </div>
            {renderData}
            <DataDetails />
        </div>
    )
};

export default DisplayData;