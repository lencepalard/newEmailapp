import react from "react"
import HeaderComponent from "../Components/HeaderComponent";
import EmaillContentViewComponent from "../Components/EmailContentComponent";
import EmailSavedComponent from "../Components/EmailSavedComponent";
import { useEffect, useState } from "react";



function ComponentView(props){
        const  [filterData, setFilterData] = useState([]);
        const [isChecked, setIsChecked] = useState([]);
        const [valueSelected, setValueSelected] = useState();
        const [data1, setdata] = useState();
        const [notRead, setNoRead] = useState();

        useEffect(() =>{
                setFilterData(props.data);
        },[props.data]);

        const readedAlready = filterData.filter((item ) =>{
            return item.Tags === 1 && item.iSDelete !== 1;
          
        });
      
        const notAlreadyRead = filterData.filter((item)=>{
            return item.Tags === 0 && item.iSDelete !== 1;
        })
            console.log("filterData",props.data)
  
        return(
            <div className="MainComponent">
                
                <div className="hader-component">
             
                    <HeaderComponent
                        setdata={setdata}
                        uSaveData={props.data}
                        dataValue={isChecked}
                        datas={valueSelected}
                        notRead={filterData}
                        setNoRead={setNoRead}
                        setFilterData={setFilterData}
                    />
                </div>
      
                <div className="EmailContent">
           
                    {notAlreadyRead.map((obj) => (
                            <EmaillContentViewComponent
                            key={obj.index_id}
                            dataToRender={obj}
                            setValueSelected={setValueSelected}
                        />
                    ))}
                </div>

                <div className="Email-Save">
 
                    <div className="Body-Content-Container mx-10 p-4 mt-0 text-gray-400 font-mono text-s">
                        <span className="label-style mx-5 mt-0  font-mono">Recently Saved</span>
                    </div>
                {readedAlready.map((obj) => (
                        <EmailSavedComponent
                            dataToRender={obj}
                            key={obj.index_id}
                        />
                ))}
                </div>
            </div>
        );

}
export default ComponentView;