
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteringContacts } from "../redux/filterSlice";


const SearcContacts = () => {
        const filter = useSelector(state=>state.filterAgendaRedux )
 const [searchInput,setSearchInput]=useState(filter)
        const dispatch = useDispatch();
        useEffect(() => {dispatch(filteringContacts({input:searchInput}))},[dispatch,searchInput])

        return <input type="text" name="searchInput" onChange={e => setSearchInput(e.target.value)} style={{width:"400px", height:"20px", margin:"10px 0px 20px 0px"}} />
}
export default SearcContacts

//input care prin scriere imi filtreaza arr. input are un onChange=> updateaza un state
//  Search name.include("state")