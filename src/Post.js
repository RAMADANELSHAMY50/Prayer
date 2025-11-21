

export default function({name,age,children}){
    
    return(
        <div style={{background:"#ffffffff", margin:"25px", padding:"5px",width:"70%", border:"solid 4px"}}>
            <h2> {name} </h2>
            <hr/>
            <p> {age}</p>
            {children}
        </div>
        
    );
}