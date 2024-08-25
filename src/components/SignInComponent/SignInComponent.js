import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import SignInService from "../../services/SignInService";
import logo from "../../images/logo.jpg"
import back_v1 from "../../images/back_v1.jpg";
import 'react-calendar/dist/Calendar.css';
import '../../css/calendar.css'
export default function SignInComponent() {
    const [roleId, setRoleId] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [meetings, setMeetings] = useState([])

    console.log(meetings)
    useEffect(() => {
        SignInService.getAllMeeting().then((res) => {
            setMeetings(res.data);
            console.log(res.data)
        });
    }, []);


    const employeeLogin = (e) => {

        SignInService.employeeLogin(userName, userPassword).then(res => {
            if (res.data.success) {

                Cookies.set('empId', res?.data?.responseData?.empId);
                Cookies.set('roleId', res?.data?.responseData?.roleId);
                Cookies.set('roleName', res?.data?.responseData?.roleName);
                Cookies.set('deptId', res?.data?.responseData?.deptId);
                Cookies.set('deptName', res?.data?.responseData?.deptName);
                Cookies.set('desigId', res?.data?.responseData?.desigId);
                Cookies.set('desigName', res?.data?.responseData?.desigName);
                Cookies.set('empEId', res?.data?.responseData?.empEId);
                Cookies.set('empFirstName', res?.data?.responseData?.empFirstName);
                Cookies.set('empMiddleName', res?.data?.responseData?.empMiddleName);
                Cookies.set('empLastName', res?.data?.responseData?.empLastName);
                Cookies.set('empEmailId', res?.data?.responseData?.empEmailId);

               

                if (res.data.responseData.roleId === 1)  //for GM
                    window.location.replace("http://localhost:3001/");


                if (res.data.responseData.roleId === 3)  //for Employee
                    window.location.replace("http://localhost:3006/");

                if (res.data.responseData.roleId === 2)  //for HOD
                    window.location.replace("http://localhost:3004/");

                    if (res.data.responseData.roleId === 4)  //for GM
                    window.location.replace("http://localhost:3005/");

                /*
                if (res.data.responseData.roleId === 1) //for GM 
                    window.location.replace("http://localhost:8080/ADMIN");

              
    
                if (res.data.responseData.roleId === 3) //for Employee 
                window.location.replace("http://localhost:8080/EMPLOYEE"); 
    
                    if (res.data.responseData.roleId === 2) //for HOD
                        window.location.replace("http://localhost:8080/HOD");
                        
                          if (res.data.responseData.roleId === 4) //for GM 
                    window.location.replace("http://localhost:8080/GM");
                    */


                /*
                if (res.data.responseData.roleId === 1) //for ADMIN 
                   window.location.replace("http://192.162.3.51:8080/ADMIN");
   
               if (res.data.responseData.roleId === 3) //for Employee 
               window.location.replace("http://192.162.3.51:8080/EMPLOYEE"); 
   
                   if (res.data.responseData.roleId === 2) //for HOD
                       window.location.replace("http://192.162.3.51:8080/HOD");
                       
                       if (res.data.responseData.roleId === 4) //for GM 
                   window.location.replace("http://192.162.3.51:8080/GM");
   
                       */

            }
            else {
                alert(res.data.responseMessage);
                setUserPassword('');
                setUserName('');
            }
        }

        ).catch((err) => {
            console.log("err=", err)
            //  console.log(err.response.data.details)
            alert(err?.response?.data?.details)
        });
        // window.location.reload(); 
    }





    return (

        <div className="row container-fluid">
            <div className="row">
            <div align="center">
                <img src={logo} className='img-responsive' style={{ height: 100, width: 500 }}></img>
                </div>
            </div>

            <div className="row"   style={{marginTop: 50,backgroundImage:`url(${back_v1})`}}>
                <div className="col-sm-4" style={{border: '1px solid grey' }}>
                <h3>News and Latest Updates</h3>
                    <marquee direction="up" height="500px" width="100%" scrollamount="2">
                        {
                            
                            meetings.map(
                                (meeting, index) =>   //index is inbuilt variable of map started with 0
                                    <ul>

                                        <li>Start date :  {meeting.meetStartDate}  End Date :  {meeting.meetEndDate}<br></br> Title : {meeting.meetTitle}</li>

                                    </ul>
                            )
                        }
                    </marquee>
                </div>
                <div className="col-sm-4" style={{ marginTop: 100 }}>
                    <div class="jumbotron">
                        <h2 align="center">Login</h2>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="userName">User Name:</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" id="userName" placeholder="Enter User Name here" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-4" htmlFor="userPassword">Password:</label>
                                <div className="col-sm-5">
                                    <input type="password" className="form-control" id="userPassword" placeholder="Enter Passeord Name here" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                                </div>
                            </div>

                        </form>
                        <div className="col-sm-offset-6">
                            <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={() => employeeLogin(roleId, userName, userPassword)} > Submit</button>
                            <button type="reset" className="btn btn-danger col-sm-offset-1" data-dismiss="modal">Clear</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4" style={{border: '1px solid grey', height: 550}}>
                    <div className='calendar-container'>
                        <Calendar />
                    </div>
                </div>
            </div>
        </div>
    );
}