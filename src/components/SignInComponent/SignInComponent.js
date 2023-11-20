import React, { useEffect, useState } from "react";
import SignInService from "../../services/SignInService";
import {useParams, useNavigate } from 'react-router-dom';

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
            window.sessionStorage.setItem('roleId', res.data.responseData.roleId);
            localStorage.setItem('roleName', res.data.responseData.roleName);
            localStorage.setItem('deptId', res.data.responseData.deptId);
            localStorage.setItem('deptName', res.data.responseData.deptName);
            localStorage.setItem('desigId', res.data.responseData.desigId);
            localStorage.setItem('desigName', res.data.responseData.desigName);
            localStorage.setItem('empEId', res.data.responseData.empEId);
            localStorage.setItem('empFirstName', res.data.responseData.empFirstName);
            localStorage.setItem('empMiddleName', res.data.responseData.empMiddleName);
            localStorage.setItem('empLastName', res.data.responseData.empLastName);

            if(roleId==1)  //for Employee
              window.location.replace("http://localhost:3006/");

              if(roleId==2)  //for HOD
              window.location.replace("http://localhost:3004/");
            
                 
              if(roleId==3)  //for GM
              window.location.replace("http://localhost:3000/");

              if(roleId==4)  //for HR
              window.location.replace("http://localhost:3000/");

        }
        ) .catch((err) => {
            alert(err.response.data.details)
         });
        
        ;
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