import Cookies from 'js-cookie';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SignInService from "../../services/SignInService";

export default function SignInComponent() {
    const [roleId, setRoleId] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const employeeLogin = (e) => {

        SignInService.employeeLogin(userName,userPassword ).then(res => {
           
            Cookies.set('empId', res?.data?.responseData?.empId);
            Cookies.set('roleId', res?.data?.responseData?.roleId);
            Cookies.set('roleName',res?.data?.responseData?.roleName);
            Cookies.set('deptId', res?.data?.responseData?.deptId);
            Cookies.set('deptName', res?.data?.responseData?.deptName);
            Cookies.set('desigId', res?.data?.responseData?.desigId);
            Cookies.set('desigName', res?.data?.responseData?.desigName);
            Cookies.set('empEId', res?.data?.responseData?.empEId);
            Cookies.set('empFirstName', res?.data?.responseData?.empFirstName);
            Cookies.set('empMiddleName', res?.data?.responseData?.empMiddleName);
            Cookies.set('empLastName', res?.data?.responseData?.empLastName);

            if(res.data.responseData.roleId===1)  //for GM
            window.location.replace("http://localhost:3005/");

           
            if(res.data.responseData.roleId===3)  //for Employee
              window.location.replace("http://localhost:3006/");

              if(res.data.responseData.roleId===2)  //for HOD
              window.location.replace("http://localhost:3004/");
            
                 
             


        }
      
        ) .catch((err) => {
            console.log("err=", err)
          //  console.log(err.response.data.details)
            alert(err?.response?.data?.details)
         });
        // window.location.reload(); 
    }

    return (

        <div className="row">
        <h2 align="center">KPP Login</h2>
            <div className="col-sm-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="userName">Enter User Name:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="userName" placeholder="Enter User Name here" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="userPassword">Enter User Password:</label>
                        <div className="col-sm-8">
                            <input type="password" className="form-control" id="userPassword" placeholder="Enter Passeord Name here" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                        </div>
                    </div>

                </form>
                <div className="col-sm-offset-8">
                    <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={() => employeeLogin(roleId,userName,userPassword)} > Submit</button>
                    <button type="reset" className="btn btn-danger col-sm-offset-1" data-dismiss="modal">Clear</button>
                </div>

            </div>
            <div className="col-sm-1"></div>
        </div>
    );
}