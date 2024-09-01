import Cookies from 'js-cookie';
import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import SignInService from "../../services/SignInService";
import logo from "../../images/logo.jpg"
import back_v1 from "../../images/back_v1.jpg";
import 'react-calendar/dist/Calendar.css';
import '../../css/calendar.css'
export default function MeetingsComponent() {
    const [isSuccess, setIsSuccess] = useState(true)
    const [announTypeId, setAnnounTypeId] = useState('');
    const [announTypeName, setAnnounTypeName] = useState('');
    const [announcements, setAnnouncements] = useState([])

    const [announId, setAnnounId] = useState('');
    const [announStartDate, setAnnounStartDate] = useState('');
    const [announEndDate, setAnnounEndDate] = useState('');
    const [announCreatedByEmpId, setAnnounCreatedByEmpId] = useState('');
    const [announCreatedByEmpEId, setAnnounCreatedByEmpEId] = useState('');
    const [announCreatedByEmpName, setAnnounCreatedByEmpName] = useState('');

    const [announCreatedByRoleId, setAnnounCreatedByRoleId] = useState('');
    const [announCreatedByRoleName, setAnnounCreatedByRoleName] = useState('');
    const [announCreatedByDeptId, setAnnounCreatedByDeptId] = useState('');
    const [announCreatedByDeptName, setAnnounCreatedByDeptName] = useState('');
    const [announCreatedByDesigId, setAnnounCreatedByDesigId] = useState('');
    const [announCreatedByDesigName, setAnnounCreatedByDesigName] = useState('');
    const [announVenue, setAnnounVenue] = useState('');
    const [announTitle, setAnnounTitle] = useState('');
    const [announDescription, setAnnounDescription] = useState('');
    const [announStatus, setAnnounStatus] = useState('');
    const [remark, setRemark] = useState('');


  


    const loadAllAnnouncementData = () => {
        SignInService.getAllAnnouncement_Meeting().then((res) => {
            if (res.data.success) {
                setIsSuccess(true);
                setAnnouncements(res.data.responseData);

            } else {
                setIsSuccess(false);
            }
        });
    }
    useEffect(() => {
        loadAllAnnouncementData();

    }, []);

    const showAnnouncementgById = (e) => {

        SignInService.getAnnouncementById(e).then(res => {
            let announcement = res.data;
            setAnnounId(announcement.announId)
            setAnnounStartDate(announcement.announStartDate)
            setAnnounEndDate(announcement.announEndDate)
            setAnnounCreatedByEmpId(announcement.announCreatedByEmpId)
            setAnnounCreatedByEmpEId(announcement.announCreatedByEmpEId)
            setAnnounCreatedByEmpName(announcement.announCreatedByEmpName)
            setAnnounCreatedByRoleId(announcement.announCreatedByRoleId)
            setAnnounCreatedByRoleName(announcement.announCreatedByRoleName)
            setAnnounCreatedByDeptId(announcement.announCreatedByDeptId)
            setAnnounCreatedByDeptName(announcement.announCreatedByDeptName)
            setAnnounCreatedByDesigId(announcement.announCreatedByDesigId)
            setAnnounCreatedByDesigName(announcement.announCreatedByDesigName)
            setAnnounVenue(announcement.announVenue)
            setAnnounTitle(announcement.announTitle)
            setAnnounDescription(announcement.announDescription)
            setAnnounStatus(announcement.announStatus)
            setRemark(announcement.remark)

        }
        );}


    return (
        <div className="row container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    {isSuccess ?
                        <div>
                            {

                                announcements.map(
                                    (announcement, index) =>  //index is inbuilt variable of map started with 0
                                        <div>
                                            {announcement.announTitle}
                                            <button type="link" className="btn btn-link" data-toggle="modal" data-target="#showMeetingData" onClick={() => showAnnouncementgById(announcement.announId)}>Click here</button>
                                        </div>

                                )
                            }
                        </div>
                        : <h4 style={{ marginTop: 50 }}>No Data Found</h4>

                    }

                </div>

            </div>

            

                {/* Modal for show data when user click on view button */}
                <div className="modal fade" id="showMeetingData" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Meeting Details</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">



                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Meeting Start Date Time:</label>
                                        <div className="col-sm-8">
                                            {announStartDate}
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Meeting End Date Time:</label>
                                        <div className="col-sm-8">
                                            {announEndDate}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Organiser Name:</label>
                                        <div className="col-sm-8">
                                            {announCreatedByEmpName}
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Organiser Employee Id:</label>
                                        <div className="col-sm-8">
                                            {announCreatedByEmpEId}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Organisser Department Name:</label>
                                        <div className="col-sm-8">
                                            {announCreatedByDeptName}
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Organiser Designation:</label>
                                        <div className="col-sm-8">
                                            {announCreatedByDesigName}
                                        </div>
                                    </div>




                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Meeting Location:</label>
                                        <div className="col-sm-8">
                                            {announVenue}
                                        </div>
                                    </div>





                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Meeting Title:</label>
                                        <div className="col-sm-8">
                                            {announTitle}
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Meeting Description:</label>
                                        <div className="col-sm-8">
                                            {announDescription}
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="deptName" >Meeting Status:</label>
                                        <div className="col-sm-8">
                                            {announStatus}
                                        </div>
                                    </div>
                                 

                                </form>
                            </div>
                            <div className="modal-footer">

                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>


        </div>
    );
}