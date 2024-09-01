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
    getAllAnnouncement_Bulletines() {      
            return axios.get(BASE_URL_API+"/announcement/all-announ-id?announTypeId=1&statusCd=A")      
    }

    
    //load all meeting and bulletine
    getAllAnnouncement_News() {      
        return axios.get(BASE_URL_API+"/announcement/all-announ-id?announTypeId=2&statusCd=A")      
}

//load all meeting and bulletine
getAllAnnouncement_Meeting() {      
    return axios.get(BASE_URL_API+"/announcement/all-announ-id?announTypeId=3&statusCd=A")      
}

//load all meeting and bulletine
getAllAnnouncement_Announcement() {      
    return axios.get(BASE_URL_API+"/announcement/all-announ-id?announTypeId=4&statusCd=A")      
}


    //when click on view button of UI
    getAnnouncementById(announId) {
       
            return axios.get(BASE_URL_API + `/announcement/by-announ-id?announId=${announId}&statusCd=A`)
    }

}


export default new SignInService();