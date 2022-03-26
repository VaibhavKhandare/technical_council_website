const allTeam=[]
const Team=()=>{
    return(
    <>
    <div>Team</div>
    {allTeam.map((i)=>{
        return (
            <>
            <div>{i}</div>
            </>
        )
    })}
    </>)
}
export default Team