import React from 'react'

//styled components
import styled from 'styled-components'

const GenreBubbleItems = ({products, setSearch, setSearchItems}) => {

  let genres = ['Rock','Funk','Pop','Punk','Heavy Metal','Jazz','Electronica','Cumbia', 'Reggae', 'Ska'];
  const [subGenresModal, setSubGenresModal] = React.useState(false);
  const [genre, setGenre] = React.useState('');

  const searchByGenre = (genre) => {
    setSearch(true)
    setSearchItems(products.filter(product => product.Genero.toLowerCase().includes(genre.toLowerCase())))
    if(genre === ''){
        setSearch(false)
        setSearchItems(products)
    }
  }
  const searchBySubgenre = (subgenre) => {
    setSearch(true)
    setSearchItems(products.filter(product => product.Tags.includes(subgenre)))
    if(subgenre === ''){
        setSearch(false)
        setSearchItems(products)
    }
  }

  const SubGenresModal = () => {
    let subGenres = [];
    switch(genre) {
        case 'Rock':
            subGenres = ['Rock','Classic Rock','Grunge','Hard Rock','Metal','Progressive Rock','Rock & Roll','Rockabilly','Rocksteady','Singer-Songwriter','Ska','Ska Punk','Speed Metal','Surf','Thrash Metal','Traditional Rock','Vocal','World'];
            break;  
        case 'Funk':
            subGenres = ['Funk','Blues','Classic Funk','Funk / Soul','Funk Metal','Funk Rock','Garage','Glam','Hard Funk','Hard Rock','Jazz Funk','Jazz Funk / Soul','Jazz Rock','Mellow','Ska','Soul','Soul Funk'];
            break;
        case 'Pop':
            subGenres = ['Pop','Adult Contemporary','Alternative','Ambient','Ballad','Bass'];
            break;
        case 'Punk':
            subGenres = ['Punk','Alternative','Alternative Rock','Anime','Black Metal','Britpop','Crossover','Death Metal','Doom Metal','Drone','Electronic','Experimental','Heavy Metal','Industrial','Industrial Metal'];
            break;
        case 'Heavy Metal':
            subGenres = ['Heavy Metal','Black Metal','Death Metal','Doom Metal','Doomcore','Experimental','Folk'];
            break;
        case 'Jazz':
            subGenres = ['Jazz','Acid Jazz','Avant-Garde','Big Band','Bop','Cajun','Calypso'];
            break;
        case 'Electronica':
            subGenres = ['Electronica','Techno','Trance','Tribal','World'];
            break;
        case 'Cumbia':
            subGenres = ['Cumbia','Techno','Trance','Tribal','World'];
            break;
        case 'Reggae':
            subGenres = ['Reggae'];
            break;
        default:
            subGenres = []
             break; 

    }

    

    return (
      <SubGenreBubble onMouseEnter={() => setSubGenresModal(true)} onMouseLeave={() => setSubGenresModal(false)} >
      {subGenres.map(subGenre => {
        return (
           <SubGenreBubbleItem onClick={() => searchBySubgenre(subGenre)} >
              {subGenre} 
              </SubGenreBubbleItem>    
        )})}
        </SubGenreBubble>
    )
  }
  
  return (
    <GenreBubble onMouseEnter={() => setSubGenresModal(true)} onMouseLeave={() => setSubGenresModal(false)}>
      {genres.map(genre => {
        return (
          <GenreBubbleItem key={genre} onClick={() => { searchByGenre(genre)}} onMouseEnter={() => {setSubGenresModal(true); setGenre(genre)}} onMouseLeave={() => setSubGenresModal(false)}>
              {genre}
          </GenreBubbleItem>
        )})}
        <div >
        {subGenresModal && <SubGenresModal onMouseEnter={() => setSubGenresModal(true)} onMouseLeave={() => setSubGenresModal(false)} />}
        </div>
    </GenreBubble>
  )
}

export default GenreBubbleItems

const GenreBubble = styled.div`
  font-size: 1.3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px #000000;
  transition: 0.3s;
`

const GenreBubbleItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; 
  color: #000;
  white-space: nowrap;
  transition: .3s;
  cursor:pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`
 const SubGenreBubble = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 450px;
  margin: 10px;
  position: absolute;
  top: 36px;
  right: -10px;
  border-radius: 10px;
  z-index: 10;
  box-shadow: 3px 3px 5px #000000;
  transition: .3s;
  animation: fadein 0.3s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
const SubGenreBubbleItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 30%;
  color: #000;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #000000;
  transition: .3s;
  cursor:pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
` 
