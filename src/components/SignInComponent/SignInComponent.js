import React, { useEffect, useState } from "react";
import SignInService from "../../services/SignInService";
import {useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function SignInComponent() {
    const [roleId, setRoleId] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [roles, setRoles] = useState([])
   // const history=useHistory();
    const navigate = useNavigate();
    useEffect(() => {

        SignInService.getRolesInDesignation().then((res) => {
            setRoles(res.data);
        });

    }, []);

  

    const employeeLogin = (e) => {

        SignInService.employeeLogin(roleId,userName,userPassword ).then(res => {
           
            Cookies.set('empId', res.data.responseData.empId);
            Cookies.set('roleId', res.data.responseData.roleId);
            Cookies.set('roleName', res.data.responseData.roleName);
            Cookies.set('deptId', res.data.responseData.deptId);
            Cookies.set('deptName', res.data.responseData.deptName);
            Cookies.set('desigId', res.data.responseData.desigId);
            Cookies.set('desigName', res.data.responseData.desigName);
            Cookies.set('empEId', res.data.responseData.empEId);
            Cookies.set('empFirstName', res.data.responseData.empFirstName);
            Cookies.set('empMiddleName', res.data.responseData.empMiddleName);
            Cookies.set('empLastName', res.data.responseData.empLastName);

            if(roleId==1)  //for Employee
              window.location.replace("http://localhost:3006/");

              if(roleId==2)  //for HOD
              window.location.replace("http://localhost:3004/");
            
                 
              if(roleId==3)  //for GM
              window.location.replace("http://localhost:3005/");

              if(roleId==4)  //for HR
              window.location.replace("http://localhost:3000/");

        }
        ) .catch((err) => {
            alert(err.response.data.details)
         });
        // window.location.reload(); 
    }

    return (

        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-5"></div>
            <div className="col-sm-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="roleId">Select Role Name:</label>
                        <div className="col-sm-7">
                            <div className="form-group">
                                <select className="form-control" id="roleId" onChange={(e) => setRoleId(e.target.value)}>
                                  <option>--Select Role--</option>
                                    {
                                        roles.map(
                                            role =>
                                                <option key={role.roleId} value={role.roleId}>{role.roleName}</option>
                                        )
                                    };

                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="userName">Enter User Name:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="userName" placeholder="Enter User Name here" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-4" htmlFor="userPassword">Enter User Password:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="userPassword" placeholder="Enter Passeord Name here" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                        </div>
                    </div>

                </form>
                <div className="col-sm-offset-8">
                    <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={() => employeeLogin(roleId,userName,userPassword)} > Submit</button>
                    <button type="button" className="btn btn-danger col-sm-offset-1" data-dismiss="modal">Clear</button>
                </div>

            </div>
            <div className="col-sm-1"></div>
        </div>
    );
}