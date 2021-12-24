import {useEffect} from "react";
import Patient from "./Patient"

const PatientList = ({patients, setPatient, removePatient}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {patients.length !== 0 ? (
                <>
                <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {''}
                    <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
                </p>

                    {patients.map( (patients) => (
                        <Patient
                        key={patients.id}
                        patients={patients}
                        setPatient={setPatient}
                        removePatient={removePatient}
                        />
                    ))}
                </>
            ) :  (
                <div>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
                    </p>
                </div>
            )}
        </div>
    )
}

export default PatientList
