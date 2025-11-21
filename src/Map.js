

export default function map(){
      let week=["sunday","monday","thusday","wensday"];
    return(
        <ul>
        {week.map(( weeks)=>(
        <li>{weeks}</li>
      ))}
      </ul>
    );
}