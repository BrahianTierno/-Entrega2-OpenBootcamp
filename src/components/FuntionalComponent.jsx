import {useEffect,useState} from 'react'

export const FuntionalComponent = () => {

    const [data, setData] = useState({

        fecha: new Date(),
        edad:0,
        nombre: 'Brahian',
        apellido:'Tierno'

    })

    useEffect(() => {
        const timerID = setInterval (
            () => tick(), 1000
         );
    
      return () => {
        clearInterval (timerID);
      }
    }, [data])

    
    const tick = () => {

        setData((prevState) => {
            let edad = prevState.edad +1;
            return {
               ...prevState,
               fecha: new Date(),
               edad
            }
         });

    }
    


  return (
    <div>
        <h2>
         Hora Actual:
         {data.fecha.toLocaleTimeString()}
         </h2>
         <h3>{data.nombre} {data.apellido}</h3>
         <h1>Edad: {data.edad}</h1>         
    </div>
  )

}
