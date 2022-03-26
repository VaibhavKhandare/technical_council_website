const allWorkShop=[]
const WorkShop=()=>{
    return(
    <>
    <div>WorkShop</div>
    {allWorkShop.map((i)=>{
        return (
            <>
            <div>{i}</div>
            </>
        )
    })}
    </>)
}
export default WorkShop