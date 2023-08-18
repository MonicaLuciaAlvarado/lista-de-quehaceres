import React, {useState} from 'react';
const Actividades = (props)=>{
    const [array,setArray]=useState([{etiqueta: "actividad 1", contenido: "Get Python Black Belt", seleccionada: false}]);
    const [contenido,setContenido] = useState("");
    const [num,setNum]=useState(2);

    const anadirActividad=(e)=>{
        e.preventDefault();
        console.log(contenido);
        let nuevaActividad = {etiqueta:"actividad "+num, contenido: contenido, seleccionada:false};
        setNum(num+1);
        setArray([...array,nuevaActividad]);
        setContenido("");
    }
    const crearNueva=(e)=>{
        setContenido(e.target.value);
    }
    const completada=(i)=>{
        const updateList = array.map((task, mapIndex)=>{
            if(i===mapIndex){
                task.seleccionada =!task.seleccionada;
            }
            return task;
        });
        setArray(updateList);
    }
    const eliminar=(i)=>{
        const item=array[i];
        if(item.seleccionada===true){
            const newList = array.filter((_task, iFilter)=>{
                return iFilter !== i;
            });
            setArray(newList);
        }
        else{}
    }
    return(
        <div className='cuerpo'>
            <form onSubmit={anadirActividad}>
                <div className='entrada'>
                    <label htmlFor='actividad'>Nueva actividad: </label>
                        <input type="text" className='casilla' onChange={crearNueva} name='actividad' placeholder='Escriba una actividad' value={contenido}/>
                    <input type='submit' value="Crear Actividad" className='btn btn-primary but'/>
                </div>
            </form>
        <ul>{
            array.map((item,i)=>
            <li key={i} className='fila'>
                <input type='checkbox' id={i} onClick={()=>completada(i)} checked={item.seleccionada}/>
                {
                item.seleccionada?
                <p className="rojo">{item.contenido}</p>:<p>{item.contenido}</p>
                }
                <button className="but btn btn-dark" onClick={e=>{eliminar(i)}}>Delete!</button>
                </li>
            )
        }</ul>
        </div>
        
    )
}
export default Actividades