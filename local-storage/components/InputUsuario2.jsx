import React, { useState } from 'react'

const InputUsuario2 = () => {

    const [datosUsuario, setDatosUsuario] = useState()

    const [datosGuardarEnLocal, setDatosGuardarEnLocal] = useState()
    
    const handleSaveData = () => {
        setDatosGuardarEnLocal(localStorage.setItem("name:", datosUsuario))
    }

  return (
    <>
    <div>InputUsuario2</div>
    {/* {datosUsuario} */}
    {/* {datosGuardarEnLocal} */}
    <input onChange={(e)=>{setDatosUsuario(e.target.value)}}></input>
    <button onClick={()=>{handleSaveData()}}>Guardar inicio de sesión</button>
    </>
  )
}

export default InputUsuario2