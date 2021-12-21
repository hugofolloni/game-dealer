const List = (props) => {

    const list = props.list;

    return ( 
        <div className="game-list-div">
            <h1>Game List</h1>
            { list.map( (list) => (
                <div className="single-game-found">                   
                    <p className='name-p'>{list.external}</p>
                    <img src={ list.thumb } alt="" height='50px' />
                    <p>Price: U${list.cheapest} </p>
                    <a href={`/game?q=${ list.cheapestDealID }`}>Go to this offer</a>
                </div>
            ))
            }
        </div>
     );
}
 
export default List;