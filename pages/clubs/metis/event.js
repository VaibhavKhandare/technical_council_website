const Event_Data =[]
const Event=()=>{
    return(
    <>
    <div>Event</div>
    {Event_Data.map((i)=>{
        return(
            <>
                <div>{i.events}</div> 
            </>
        )
    })}
    </>)
}
export default Event