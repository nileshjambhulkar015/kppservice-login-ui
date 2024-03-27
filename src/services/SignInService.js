import axios from "axios";
import { BASE_URL_API } from "./URLConstants";

class SignInService{

     //Get all roles present in designation table 
     getRolesInDesignation(){
        return axios.get(BASE_URL_API+"/roles/designation/roles")
    }

    //login employee based on role
    employeeLogin(userName,userPassword){

        return axios.get(BASE_URL_API+"/login?userName="+userName+"&userPassword="+userPassword)
    }
}


export default new SignInService();