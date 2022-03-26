const allEvents=[]
const Events=()=>{
    return(
    <>
    <div>Events</div>
    {allEvents.map((i)=>{
        return (
            <>
            <div>{i}</div>
            </>
        )
    })}
    </>)
}
export default Events