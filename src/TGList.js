const TGList = (props) => {
    
    const list = props.list;

    return (
        <div className="game-list-div">
            { list.map( (list) => (
                <div className="single-game-found">         
                    <div className="mobile-top">
                        <div className="image-single-game">
                            <img src={ list.thumb } alt="" height='50px' /> 
                        </div>   
                        <div className="name-single-game">
                            <h3 className='name-p'>{list.title}</h3>
                        </div>            
                    </div>       
                    <div className="mobile-bottom">
                        <div className="price-single-game">
                            <p>Price: U${list.salePrice} </p>
                        </div>
                        <div className="link-single-game">
                            <a href={`/game?q=${ list.dealID }`}>See this</a>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
     );
}
 
export default TGList;