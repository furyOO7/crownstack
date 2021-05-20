import React, { useEffect,useState } from 'react';
import { filterData } from '../../utility/utilityfunction';
import IndividualItem from './individualItem';

const Categorypage = (props) => {
    let [mainData, setMainData] = useState([]);
    
    useEffect(() => {
        let getData =  filterData(props.match.params);
        setMainData(getData)
    }, [props.match.params])

    const showSubCategories = (e, cat)=> {
        let data =cat.subcategories
        setMainData(data);
    }
    const backClicked = (e, cat)=> {
        let getData =  filterData(props.match.params);
        setMainData(getData);
    }
    return ( 
       mainData ?  <div>
       <IndividualItem mainData={mainData.categories ? mainData.categories : mainData} 
       cat={mainData.categories ? true : false}
       catCliked={(e, cat) => showSubCategories(e, cat)} back={backClicked}/>
   </div>: []
     );
}
 
export default Categorypage;