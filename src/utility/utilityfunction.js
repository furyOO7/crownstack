import {catalogData} from '../constants/catalog'
export const filterData = (data) => {
    if(data.cat){}
    else{
        let filterCountry = catalogData.data.locations.filter(country => country.name === data.location)[0]
        if(filterCountry){
            let filterCategories = filterCountry.branches.filter(branch => branch.branch_id === data.branch)[0]
            return filterCategories
        }
    }
}