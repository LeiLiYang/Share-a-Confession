import "../styles/style.css";

export default function Confession( {confessions} ) {
    return( 
        <div className="confession">   
            {
                confessions?.map((confession) => {
                    return (
                        <div>
                            <div className="confession-info">
                                <div className="confession-title">
                                    {confession.title}
                                </div>
                                <div className="confession-usertime">
                                    Anonymous <br></br>
                                    {confession.date}
                                </div>
                            </div>
                            
                            <div className="confession-text">
                                {confession.confession}
                            </div> 
                            <br></br><br></br>
                        </div>  
                    )
                })
            }       
        </div>
    )
}


