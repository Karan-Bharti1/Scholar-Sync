const TeacherForm=({teachersData,handleChange})=>{
    return(<>
     <label htmlFor="teacherName">Name:</label>
    <input type="text" className="form-control" value={teachersData.teacherName} id="teacherName" onChange={handleChange} name="teacherName" required/>
    <label htmlFor="phoneNumber">Contact :</label>
    <input type="text" className="form-control" value={teachersData.phoneNumber} id="phoneNumber" onChange={handleChange} name="phoneNumber" required/>
    <label htmlFor="emailId">Email Id :</label>
    <input type="text" className="form-control" value={teachersData.emailId} id="emailId" onChange={handleChange} name="emailId" required/>
    <label htmlFor="gender">Gender</label>
    <select className="form-control" value={teachersData.gender} id="gender" name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>
    <label htmlFor="qualification">Qualification :</label>
    <input type="text" className="form-control" value={teachersData.qualification} id="qualification" onChange={handleChange} name="qualification" required/>
    <label htmlFor="resultPercentage">Result Percentage :</label>
    <input type='number' className="form-control" value={teachersData.resultPercentage||""} id="resultPercentage" onChange={handleChange} name="resultPercentage" required/>
    <button type='submit' className="btn btn-danger my-3">Proceed</button></>)
}
export default TeacherForm;