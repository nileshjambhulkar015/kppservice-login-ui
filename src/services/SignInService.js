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


    //load all meeting and bulletine
    getAllMeeting() {      
            return axios.get(BASE_URL_API+"/employee-meeting/all-meeting-id?statusCd=A")      
    }

    //when click on view button of UI
    getMeetingById(meetingId) {
            return axios.get(BASE_URL_API + `/employee-meeting/by-meeting-id?meetingId=${meetingId}&statusCd=A`)
    }

}


export default new SignInService();