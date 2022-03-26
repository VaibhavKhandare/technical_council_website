const allMember=[]
const Member=()=>{
    return(
    <>
    <div>Member</div>
    {allMember.map((i)=>{
        return (
            <>
            <div>{i}</div>
            </>
        )
    })}
    </>)
}
export default Member