const Resources_Data =[]
const Resources=()=>{
    return(
    <>
    <div>Resources</div>
    {Resources_Data.map((i)=>{
        return(
            <>
                <div>{i.rescourseName}</div>
                <div>{i.description}</div>
                <div>{i.link}</div>
            </>
        )
    })}
    </>)
}
export default Resources