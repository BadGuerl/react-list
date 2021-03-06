// formulario para añadir un capitulo a la lista
import React from 'react'

// el nombre y el summary empiezan vacios
const initial = {
  name: '',
  summary: '',
}

// el function cuando tiene un estado se convierte en class
// extends significa que hereda de React.Component
class EpisodeForm extends React.Component {
  state = {
    data: initial
  }

  // handleSubmit (encargado del enviar)
  handleSubmit = (event) => {
    event.preventDefault() // esto desactiva las acciones por defecto de event, el submit no refresca la pagina

    // y aqui es donde el hijo recibe como propiedad la funcion del padre (addEpisode)
    // this hace referencia al padre, props a las propiedades del hijo
    this.props.addEpisode({
      ...this.state.data, // ... coje el estado anterior y escribe el nuevo valor sin borrar lo que ya tenia en el campo data
      season: 1,  // y ahora le añade el season
      number: 0,  // el number
      image: {    // y la image
        medium: "http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
        original: "http://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg"
      },
    })

    this.setState({ // esto hace que una vez ejecutado el addEpisode, el form vuelva a su estado inicial, vacio
      data: initial
    })
  }

  // handleChange (encargado de cambiar todos los campos que vengan en la id)
  handleChange = (event) => {
    const  { id, value } = event.target

    this.setState((prev) => {
      return {
        data: {
          ...prev.data,
          [id]: value
        }
      }
    })
  }

  // esto es lo que va a salir en pantalla
  render() {
    return (
      <>
        {/* esto te saca por pantalla la previsualizacion del objeto que estas creando */}
        {/* <pre>{JSON.stringify(this.state.data)}</pre> */}

        <form className="mb-5 mt-5" onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={this.state.data.name}
                onChange={this.handleChange}
            />
            </div>

            <div className="form-group mb-2">
            <label htmlFor="summary">Summary</label>
            <input
                type="text"
                className="form-control"
                id="summary"
                placeholder="Enter summary"
                value={this.state.data.summary}
                onChange={this.handleChange}
            />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </>
    )
  }
}

export default EpisodeForm