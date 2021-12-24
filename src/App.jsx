import {useState, useEffect} from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"

function App() {
const [patients, setPatients] = useState([])
const[patient, setPatient] = useState({})

useEffect(() =>{
  const getLS = () =>{
    const patientLS = JSON.parse(localStorage.getItem("pacientes")) ?? []
    setPatients(patientLS)
  }
getLS()
}, [])

useEffect(() => {
  localStorage.setItem("pacientes", JSON.stringify(patients))
}, [patients])

const removePatient = (id) =>{
  const updatedPatients = patients.filter(patient => patient.id !== id)
  setPatients(updatedPatients)
}

  return (
      <div  className="container mx-auto mt-20">
        <Header />
        
        <div className="mt-12 md:flex">
          <Form 
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
          />
          <PatientList 
          patients={patients}
          setPatient={setPatient}
          removePatient={removePatient}
          />
        </div>

      </div>
  )
}

export default App
