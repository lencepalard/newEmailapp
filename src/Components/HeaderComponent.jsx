import react, { useEffect, useState } from 'react'
import icon_save from "../Assets/icon-save.png"
import icon_filter from "../Assets/icon-filter.PNG"
import icon_remove from "../Assets/icon-remove.PNG"
function HeaderComponent(props){
    const [passDataIntoParent, setPassDataIntoParent] = useState();
    const [list,setList]= useState(props.notRead);
    const [data, setData] = useState();
    //pag nakuha kona data na sinelect babaguhin ko id nya dto

    useEffect(() =>{
     props.setFilterData(props.notRead)
     props.setdata(props.notRead)
    },[])

    const onSaveItem = (id) =>{
        props.notRead[props.datas] = {...props.notRead[props.datas], Tags : 1}
        props.setFilterData(props.notRead)
        props.setdata(props.notRead)
    }
    const onRemoveItem = (id) => {
        props.notRead[props.datas] = {...props.notRead[props.datas], iSDelete : 1}
        props.setdata(props.notRead)
    }
   
  
    return(
        <div className="Content-Container mx-10 mt-10 ">
            
            <div className='Header-container mx-10 mt-5 border-b-2 p-5 flex'>

                <input type="checkbox" id="check-box-1" className="w-4 h-4 mt-2"/>
                <button className="mx-2 bg-green-50 mt-2 text-center w-20 h-5 rounded uppercase hover:shadow-lg border-1 ring-2 ring-green-400 text-green-500  text-xs"
                    onClick={() => onSaveItem(props.notRead)}
                   
                >
                            Save <img src={icon_save} className="w-4 h-4 float-right mt-0 mr-1"/> 
                </button>
                <button className="mx-2 bg-gray-50 px-1  text-center rounded uppercase hover:shadow-lg border-1 ring-2 ring-gray-400 text-gray-500  text-sm  mt-2">
                            Manage Filter <img src={icon_filter} className="w-4 h-4 float-right mt-1  mx-2"/> 
                </button> 
                    <span className="ml-2  p-1 bg-gray-100"></span>
                <button className="mx-2 bg-red-50  text-center w-20 rounded uppercase hover:shadow-lg border-1 ring-2 ring-red-400 text-red-500  text-sm  mt-2"
                    onClick={() => onRemoveItem(props.notRead)}
                >
                            Delete <img src={icon_remove} className="w-4 h-4 float-right mt-0.5 mr-1"/> 
                </button>
            </div>
            <div className="Body-Content-Container mx-0 p-4 mt-0 text-gray-400 font-mono text-s">
                <span className="label-style mx-5 mt-0  font-mono">Unread</span>
            </div>
        </div>
    )
}
export default HeaderComponent;