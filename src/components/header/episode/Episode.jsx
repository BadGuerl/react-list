// aqui no importamos react porque estamos haciendo una funcion para el DOM
// los props son las propiedades que van a tener los hijos del objeto

// Episode tiene hijos(props), que luego los declaramos con const { episode, deleteEpisode }
function Episode(props) {
  const { episode, deleteEpisode } = props

    return (
      <div className="Episode card">
        <a href="/episodes/4952">
          <img src={episode.image.medium} className="card-img-top" alt="..."/>
        </a>
        
        <div className="card-body">
          <h5 className="card-title">
             {episode.name}
          </h5>
          <h6 className="card-title">
             S{episode.season} E{episode.number}
          </h6>
          <p className="card-text">
            {episode.summary}
          </p>

          <button
            className="btn btn-danger" 
            onClick={() => deleteEpisode(episode.id)}>
              Delete
          </button>
        </div>
      </div>
    )
  }

export default Episode

// cuando escribimos esta linea (return <div>{JSON.stringify(episode)}</div>) le ponemos el JSON.stringify,
// nos saca en pantalla un string con la informacion del JSON