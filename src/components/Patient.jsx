const Patient = ({patients, setPatient, removePatient}) => {

    const {name, owner, email, rut, date, symptom, id} = patients

    const hadleRemove = () =>{
        const answer = confirm("¿Deseas eliminar este paciente?")

        if(answer){
            removePatient(id)
        }
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
                <p className="font-bold mb-3 text-gray-800 uppercase">
                    Nombre de la Mascota: {""}
                    <span className="font-normal normal-case">{name}</span>
                </p>

                <p className="font-bold mb-3 text-gray-800 uppercase">
                    Nombre del Propietario: {""}
                    <span className="font-normal normal-case">{owner}</span>
                </p>

                <p className="font-bold mb-3 text-gray-800 uppercase">
                    E-mail: {""}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-800 uppercase">
                   Rut: {""}
                    <span className="font-normal normal-case">{rut}</span>
                </p>

                <p className="font-bold mb-3 text-gray-800 uppercase">
                    Fecha de Alta: {""}
                    <span className="font-normal normal-case">{date}</span>
                </p>

                <p className="font-bold mb-3 text-gray-800 uppercase">
                    Sintomas: {""}
                    <span className="font-normal normal-case">{symptom}</span>
                </p>

                <div className="flex justify-between mt-10">
                    <button 
                            type="button"
                            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-indigo-100 font-bold uppercase rounded-md cursor-pointer transition-all"
                            onClick={() => setPatient(patients)}
                        >Editar</button>

                        <button 
                            type="button"
                            className="py-2 px-10 bg-red-600 hover:bg-red-800 text-indigo-100 font-bold uppercase rounded-md cursor-pointer transition-all"
                            onClick={hadleRemove}
                            >
                        Eliminar</button>
                </div>

            </div>
    )
}

export default Patient
