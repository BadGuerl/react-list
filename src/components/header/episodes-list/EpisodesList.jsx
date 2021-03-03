import React from 'react';
import episodes from '../../../data/episodes.json';
import Episode from '../episode/Episode';

class EpisodesList extends React.Component {
  state = {
    season: null,
    search: ''
  }

  switchSeason = (season) => {
    this.setState({ season })
  }

  search = (event) => {
    const search = event.target.value

    this.setState({ search })
  }

  render() {
    return (
      <div className="EpisodesList">
        <div className="FilterSeason mb-4">
          <h6>Filter season</h6>

          <div className="btn-group" role="group">
            <button className="btn btn-secondary">Todas</button>

            {[1, 2, 3, 4, 5, 6, 7, 8].map(season => (
              <button key={season} className="btn btn-secondary" onClick={() => this.switchSeason(season)}>
                S0{season}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          className="form-control mb-4"
          name="searchText"
          autocomplete="off"
          onChange={this.search}
          placeholder="Search"
        />
  
        <div className="row">  
          {episodes
          .filter(e => e.season === this.state.season || this.state.season === null) //filtro para que filtre por temporadas || y que no se quede vacia
          .filter(e => e.name.toLowerCase().includes(this.state.search.toLocaleLowerCase())) //filtro para que lo pase todo a minusculas
          .map((episode, i) => ( 
            <div className="col-3 mb-4" key={i}>          
            <Episode episode={episode} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default EpisodesList;

// se puede poner las etiquetas del primer div asi <> y </> sin nombre dentro, asi no tiene clasificacion 
// el .map saca un listado del array episodes,
// y la i (indice) es la key que diferencia cada episode