const StudentForm=({studentName={},handleChange,editChange})=>{
    return(<>
   
<label htmlFor="name">Name:</label>
    <input className="form-control" name="name" placeholder="Student Name" type="text" value={studentName.name||""} onChange={handleChange} required id="name" />
    
    <label   htmlFor="age">Age:</label>
    <input  className="form-control" name="age" placeholder="Student Age"  type="number" value={studentName.age||""} onChange={handleChange} required id="age" />
    
    <label  htmlFor="grade">Grade:</label>
    <input  className="form-control" name="grade" type="text" placeholder="Student Grade"  value={studentName.grade||""} onChange={handleChange}  required id="grade" />
    
    <label >Gender:</label><br/>
   <label htmlFor="male"> <input name="gender" type="radio" value={"Male"} onChange={handleChange} checked={ studentName.gender === "Male"} required id="male" />Male</label>{"   "}
   <label htmlFor="female"> <input name="gender" type="radio" value={"Female"} onChange={handleChange} checked={ studentName.gender === "Female"} required id="female" />Female</label>
   <br/><br/>
   {editChange &&(<>
    <label   htmlFor="attendance">Attendance:</label>
    <input  className="form-control" type="number" name="attendance" placeholder="Student Attendance" value={studentName.attendance||""} onChange={handleChange} required id="attendance" />
    <label   htmlFor="marks">Marks:</label>
    <input  className="form-control" type="number" name="marks" placeholder="Student Marks" value={studentName.marks||""} onChange={handleChange} required id="marks" />
   </>)}
   
   

    </>)
}
export default StudentForm;