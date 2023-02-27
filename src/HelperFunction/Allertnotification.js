import Swal from 'sweetalert2'
const AllertNotify=(value,len)=>{
    const allertMsg=(msg)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msg
          })
    }
    let allert=''
    value.map((val)=>{
        if(val.position ==='Defender')
        if( val.occurrence >4){
            allert='Alert'
        allertMsg("Cannot have more than 4 defenders")
            
    }
        if(val.position ==='Goalkeeper' )if( val.occurrence >1)
        {
            allert='Alert'
        allertMsg("Cannot have more than 1 Goalkeeper")}
        if(val.position ==='Striker' )if( val.occurrence >3)
        {
            allert='Alert'
        allertMsg("Cannot have more than 3 striker")}
        if(val.position ==='Midfielder' )if( val.occurrence >3)
        {
            allert='Alert'
        allertMsg("Cannot have more than 3 midfielders")
        }
        })
        return allert
}
export default AllertNotify