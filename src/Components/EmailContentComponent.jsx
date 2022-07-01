import react,{useEffect, useState} from "react";
import icon_dots from "../Assets/icon_dots.PNG"
import user_icon from "../Assets/user-icon.png"

import moment from "moment"
function EmaillContentViewComponent(props){

    const [isOpen, setIsOpen] = useState(false);
    const [iSSave, setIsSave] = useState();
    const [isChecked, setIsChecked] = useState([]);
    const [list, setList] = useState([]);

  
    let date_moment = moment(props.dataToRender.Date,"ddd MMM DD YYYY HH:mm:ss ZZ")
    let day = date_moment.format("DD")
    let month = date_moment.format("MMM")
    let fname = props.dataToRender.Sender.split(" ")[0].split("")[0];
    let lname = props.dataToRender.Sender.split(" ")[1].split("")[0];

    const handlecheckbox =(e) =>{
            const {value, checked} = e.target;
            props.setValueSelected(value);
    }   
  
   
    return (
        <div className="EmailContentComponent cursor-pointer" >
          
            <div className="mx-20 mt-0 border-2 p-1 mt-2 rounded-md h-max transition-transform" onClick={(id) => setIsOpen(!isOpen)}>
                <div className="content-header-title flex inline-block p-b-2">
                            
                             <img src={icon_dots} className="w-5 h-5 inline-block mt-4"/> 
                             <input type="checkbox" className="ml-2 w-4 h-4 inline-block  mt-4"
                               value={props.dataToRender.index_id}
                            //    checked={props.dataToRender.iSDelete}
                               onChange={(e) => handlecheckbox (e)}
                             />
                            <span className="dots bg-green-500 w-4 h-4 mx-4 mt-4 rounded-full"></span>
                             <button className="calendar-btn inline-block bg-gray-100 border rounded-md  p-1 text-center ml-5 text-xs w-12 h-12  mt-0"><b className="text-lg">{day}</b><br/><span className="text-xs mt--2">{month}</span></button>
                             <span className="bg-black rounded-full h-10 w-10 mt-2 mx-3 text-center text-white text-m p-2">{fname+ " " + lname}</span>
                            
                            <h3 className="mt-1  ml-5"><b>{props.dataToRender.Email_Subject}</b><br/>
                                <span className="mt-0 inline-block text-gray-500 text-xs">{props.dataToRender.Sender} {"<" + props.dataToRender.Email + ">"} | {props.dataToRender.Date} | June 28,2022 at 6:40 PM | $5</span> 
                            </h3>
                            <span className="text-right">New Project 3/admin</span><br/>
                          
                </div>

                {isOpen &&
                    <div className="display-expand-data  p-5 border-t-2 border-dashed ">
                              {/* <span className="">{props.dataToRende.Email_Subject}</span><br/> */}
                           
                    </div>
                }
                             
            </div>
        </div>
    );
}

export default EmaillContentViewComponent;