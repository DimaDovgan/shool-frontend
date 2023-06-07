import Table from 'react-bootstrap/Table';
import{Button } from "react-bootstrap"
import { useSelector} from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from "react-redux";
import {updatePositionById ,updatePositionByIdDelete} from '../redux/Acions/Actions.js'
import { useEffect } from "react"
import { readingHost } from "../redux/Acions/Actions"
import { useNavigate } from "react-router-dom";
import "./style.css"

export const Timetable = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(readingHost());

  },[dispatch])
    const weekDates=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const weekLesons=[1,2,3,4,5,6,7,8]
    const lesonsArr= useSelector(state => state.shool.lesons);
    const joinPosition=(event)=>{
      const dateStr = event.currentTarget.name;
     const dateArr=dateStr.split(",");
      console.log("joinPosition",dateArr)
      const date=dateArr[0];
      const time=dateArr[1];
      const title=dateArr[2];
      const id=dateArr[3];
      dispatch(updatePositionById({id,date,time}));
    }

    const goToDetails=(id)=>{
      navigation(`/lesonDetails/${id}`);
  }
return <div className='hero_container '><h1>Розклад</h1>

<Table  bordered  className='dropdawn_reset'>
      <thead>
        <tr>
          <th>#</th>
          <th>leson 1</th>
          <th>leson 2</th>
          <th>leson 3</th>
          <th>leson 4</th>
          <th>leson 5</th>
          <th>leson 6</th>
          <th>leson 7</th>
          <th>leson 8</th>
        </tr>
      </thead>
      <tbody>
{
    weekDates.map((weekDate)=>{

        return <tr>
          <td>{weekDate}</td>
         {weekLesons.map((weekLeson)=>{

         

          for (let c = 0; c < lesonsArr.length; c++){
              for (let i = 0; i < lesonsArr[c].tabPosition.length; i++) {
                if(lesonsArr[c].tabPosition[i].date==weekDate && lesonsArr[c].tabPosition[i].time==weekLeson){
                  return <td onClick={()=>{navigation(`/lesonDetails/${lesonsArr[c]._id}`);}} key={lesonsArr[c]._id}>
                    {lesonsArr[c].title} 
                    <a href={lesonsArr[c].lesonLink} onClick={(e)=>{ e.stopPropagation();}} target="_blank" rel="noopener noreferrer" className="joinButton" >join</a> 
                    <p onClick={(e)=>{
                      dispatch(updatePositionByIdDelete({id:lesonsArr[c]._id,date:weekDate,time:weekLeson}));
                      e.stopPropagation()
                    }
                    }>&#215;</p>
                  </td>
                }
              
              }}


            return <td>
            {/* <Button variant="outline-danger" name={`${weekDate} ${weekLeson}`} onClick={joinPosition} className="infoLesonBtn">add leson</Button> */}


            <Dropdown className="dropdown">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      add leson
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {
        lesonsArr.map((leson)=><Dropdown.Item key={Math.floor(Math.random() * 1000000)} name={`${weekDate},${weekLeson},${leson.title},${leson._id}`} onClick={joinPosition} >{leson.title}</Dropdown.Item>)
      }
      </Dropdown.Menu>
    </Dropdown>
            </td>
          }
          
          )}
          
        </tr>

    })
}

      </tbody>
    </Table>
</div>
}

