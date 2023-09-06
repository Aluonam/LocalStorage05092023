import React, {useState, useEffect} from 'react'

const ImputUsuario = () => {

    const [datosInputUsuario, setDatosInputUsuario] = useState()
    const [datosGuardadosLocal, setdatosGuardadosLocal] = useState()

    // 

    const handleGuardarEnLocal = () => {
        localStorage.setItem("myCat", "Tom");

    }

    useEffect(() => {
      const datosLocal = localStorage.getItem("nombre de usuario")
      setdatosGuardadosLocal(datosLocal)
    }, [])
    

  return (
    <>
    {datosInputUsuario}
    <input onChange={(e)=>{setDatosInputUsuario(e.target.value)}}></input>
    <button onClick={()=>{handleGuardarEnLocal()}}>Iniciar sesión (guardar) </button>
    </>
  )
}

export default ImputUsuario