import {useState} from 'react'
import Card from './Card'

const Form = () => {

     const [album, setAlbum] = useState({
        cancion: '',
        disco: ''
    })


    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    console.log(album)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(album.cancion.length >= 3 && album.disco.length >= 6){
            setShow(true)
            setErr(false)
             
        } else {
            setErr(true)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Agregue un tema a la playlist</h1>
            <label>Nombre de la cancion </label>
            <input type="text" onChange={(event) => setAlbum({...album, cancion: event.target.value})}/>
            <label>Nombre del disco</label>
            <input type="text" onChange={({target}) => setAlbum({...album, disco: target.value})}/>
            <button>Guardar</button>
        </form>
        {show && <Card tema1={album.cancion} tema2={album.disco}/>}
        {err && <p>Por favor chequea que la información sea correcta</p>}
        
        <hr />
    </div>
  )
}

export default Form