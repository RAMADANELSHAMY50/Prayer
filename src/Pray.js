
export default function Prayer({name , time}){
    return(
        <div className="prayerName">
            <p className="prayName">{name}</p>
            <p className="prayTime">{time}</p>
        </div>
    );
}
