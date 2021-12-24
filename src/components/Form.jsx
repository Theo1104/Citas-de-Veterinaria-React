import {useState, useEffect} from "react";
import Error from "./error";

const Form = ({patients, setPatients, patient, setPatient}) => {
    const [name, setName ] = useState("")
    const [owner, setOwner ] = useState("")
    const [email, setEmail ] = useState("")
    const [rut, setRut ] = useState("")
    const [date, setDate ] = useState("")
    const [symptom, setSymptom ] = useState("")

    const [error, setError] = useState(false)

    useEffect(() => {
    if(Object.keys(patient).length > 0){
        setName(patient.name)
        setOwner(patient.owner)
        setEmail(patient.email)
        setRut(patient.rut)
        setDate(patient.date)
        setSymptom(patient.symptom)
    }
    }, [patient])

    const generarID = () => {
        const randomNumber = Math.random().toString(36).substring(2)
        const randomDate = Date.now().toString(36)

        return randomNumber + randomDate
    }

    const handleSubmit = (event) =>{

        event.preventDefault();
        setError(true)

        //Validacion

        if([name, owner, email, rut, date, symptom].includes("")){
            console.log("Hay al menos 1 campo vacio")
            return;
        }
        setError(false)

        //Objeto de pacientes

        const patientObject = {
            name,
            owner,
            email,
            rut,
            date,
            symptom,
        }

        if(patient.id){
            patientObject.id = patient.id

            const updatedPatients = patients.map(statePatient => statePatient.id === patient.id ? patientObject : statePatient)

            setPatients(updatedPatients)
            setPatient({})
        }else{
            patientObject.id = generarID()
            setPatients([...patients, patientObject])
        }

        //Reiniciar Formulario
        setName("")
        setOwner("")
        setEmail("")
        setRut("")
        setDate("")
        setSymptom("")
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-10">
                {error && <Error><p>"Todos los campos son OBLIGATORIOS"</p></Error>}
                <div className="mb-5">
                    <label htmlFor="mascota"  className="block text-gray-800 uppercase font-bold">Nombre Mascota</label>
                    <input 
                    id="mascota" 
                    type="text" 
                    placeholder="Nombre de la Mascota" 
                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                    value={name}
                    onChange={ (event) => setName(event.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario"  className="block text-gray-800 uppercase font-bold">Nombre Propietario</label>
                    <input 
                    id="propietario" 
                    type="text" 
                    placeholder="Nombre del Propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                    value={owner}
                    onChange={ (event) => setOwner(event.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email"  className="block text-gray-800 uppercase font-bold">E-mail</label>
                    <input 
                    id="email" 
                    type="email" 
                    placeholder="E-mail para contactar al Propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                    value={email}
                    onChange={ (event) => setEmail(event.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="rut"  className="block text-gray-800 uppercase font-bold">Rut del Propietario</label>
                    <input 
                    id="rut" 
                    type="text" 
                    placeholder="Introduzca su Rut" 
                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                    value={rut}
                    onChange={ (event) => setRut(event.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta"  className="block text-gray-800 uppercase font-bold">Alta</label>
                    <input 
                    id="alta"
                     type="date" 
                     className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                     value={date}
                    onChange={ (event) => setDate(event.target.value) }
                     />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas"  className="block text-gray-800 uppercase font-bold">Sintomas</label>
                    <textarea 
                    id="sintomas" 
                    placeholder="Introduzca los Sintomas de la Mascota" 
                    className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                    value={symptom}
                    onChange={ (event) => setSymptom(event.target.value) }
                    />
                </div>

                <input
                 type="submit" 
                 className="bg-indigo-600 w-full p-3 text-indigo-100 uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all" 
                 value={patient.id ? "Guardar cambios" : "Agregar Paciente"}
                 />
            </form>
        </div>
    )
}

export default Form