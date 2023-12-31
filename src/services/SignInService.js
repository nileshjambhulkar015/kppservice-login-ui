import axios from "axios";

const BASE_URL="http://localhost:9091/roles";


class SignInService{

     //Get all roles present in designation table 
     getRolesInDesignation(){
        return axios.get("http://localhost:9091/roles/designation/roles")
    }

    //login employee based on role
    employeeLogin(roleId,userName,userPassword){

        return axios.get("http://localhost:9091/login?roleId="+roleId+"&userName="+userName+"&userPassword="+userPassword)
    }
}


export default new SignInService();