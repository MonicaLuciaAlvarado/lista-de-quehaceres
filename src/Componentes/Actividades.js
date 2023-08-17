import React, {useState} from 'react';
const Actividades = (props)=>{
    const [array,setArray]=useState([{etiqueta: "actividad 1", contenido: "Get Python Black Belt", seleccionada: false}]);
    const [nueva,setNueva]=useState({});
    var actividadSeleccionada= {};
    var contenido = "";
    const [num,setNum]=useState(2);
    const [arrayTareas, setArrayTareas]=useState([]);
    var arrayModificada=[];
    var arrayTareasModificada=[];

    const anadirActividad=(e)=>{
        e.preventDefault();
        setArray([...array,nueva]);
    }
    const crearNueva=(e)=>{
        setNueva({etiqueta:"actividad "+num, contenido: e.target.value, seleccionada:false});
        setNum(num+1);
        contenido=e.target.value;
    }
    const devolverActividadSeleccionada=(e)=>{
        e.preventDefault();
        actividadSeleccionada.etiqueta=array.find(actividad => actividad.contenido===e.target.value).etiqueta;
        actividadSeleccionada.contenido=e.target.value;
        actividadSeleccionada.seleccionada=false;
    }
    const anadirTarea=(e)=>{
        e.preventDefault();
        setArrayTareas([...arrayTareas, actividadSeleccionada]);
        arrayModificada=array.filter(activities=>activities.contenido!==actividadSeleccionada.contenido);
        setArray(arrayModificada);
    }
    const eliminar=(e)=>{
        e.preventDefault();
        console.log();
        arrayTareasModificada=arrayTareas.filter(activities=>activities.contenido!=="hola");
        setArrayTareas(arrayTareasModificada);
    }
    return(
        <div>
            <form onSubmit={anadirActividad}>
                <div className='entrada'>
                    <label htmlFor='actividad'>Nueva actividad: </label>
                    <input type="text" className='casilla' onChange={crearNueva} name='actividad' placeholder='Escriba una actividad'/>
                    <input type='submit' value="Crear Actividad"/>
                </div>
            </form>

        <select onChange={devolverActividadSeleccionada}>
        {
            array.map((item,i)=>
            <option key={i}>{item.contenido}</option>
            )
        }
        </select>

        <form onSubmit={anadirTarea}>
            <input type='submit' value="Añadir tarea"/>
        </form>

        <ul>{
            arrayTareas.map((item,i)=>
            <li key={i} id={i} onChange={e=>item.seleccionada=true}>
                <input type='checkbox'/>
                {
                item.seleccionada?
                <p className="rojo">{item.contenido}</p>:<p>{item.contenido}</p>
                }
                <button onChange={eliminar}>Delete!</button>
                </li>
            )
        }</ul>
        </div>
        
    )
}
export default Actividades