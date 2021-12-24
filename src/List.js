const List = (props) => {

    const list = props.list;

    return ( 
        <div className="game-list-div">
            { list.map( (list) => (
                <div className="single-game-found">                
                    <div className="image-single-game">
                        <img src={ list.thumb } alt="" height='50px' /> 
                    </div>   
                    <div className="name-single-game">
                      <h3 className='name-p'>{list.external}</h3>
                    </div>
                    <div className="price-single-game">
                       <p>Price: U${list.cheapest} </p>
                    </div>
                    <div className="link-single-game">
                        <a href={`/game?q=${ list.cheapestDealID }`}>See this</a>
                    </div>
                </div>
            ))
            }
        </div>
     );
}
 
export default List;