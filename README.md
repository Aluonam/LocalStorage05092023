# LocalStorage05092023
**PASOS LOCALSTORAGE**

1. Crear useState para guardar datos que escribe el usuario.

2. Crear input con onChange y e.target.value que guarde en el set del useState los datos que escribe el usuario.

3. Crear boton enviar datos que llamará a una funcion 

4. Creo otro useState para guardar los datos que se almacenan en local

5. La funcion del botón irá en la parte lógica y tendrá localStorage.setItem("clave", "valor");

```javascript
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
```
