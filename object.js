var m=new Date(27,07,2022);
var d=m.getMonth();
console.log(d);

//custom object creation 

//------Custom Object Creation Usning--Conctructor Function synctax---
function Employee(empId,empName,empSal)
{
    this.empId=empId;
    this.empName=empName;
    this.empSal=empSal;
    this.dispEmpInfo=function()
    {
        return "EMPID:"+this.empId+ " Name: "+this.empName+
        " Salary: "+this.empSal;
    }
    this.calcEmpAnnualSal=function()
    {
        return " Annual Salary: "+this.empSal*12
    }    
}
//-----------------------
var emp1=new Employee(112081,"vaishaliS",100.0);
var emp2=new Employee(222,"Prity",200.0);

console.log(" Type Of dispEmpInfo :"+ typeof(emp1.dispEmpInfo)) ;
console.log(" Type Of emp1 :"+ typeof(emp1)) ;
console.log("emp1 :  "+emp1.dispEmpInfo() + " - "+
emp1.calcEmpAnnualSal());

console.log("emp2 :  "+emp2.dispEmpInfo() + " - "+
emp2.calcEmpAnnualSal());

//---------------Create Manager and inherit from Emplyee------
function Manager(deptId,deptName)
{
    this.deptId=deptId;
    this.deptName=deptName;
    this.dispMgrInfo=function()
    {
        return this.dispEmpInfo() + " DeptId: "+
        this.deptId+ " DeptName:"+this.deptName
    }
}
//-----------------------------
var sagarEmp=new Employee(567,"SagarK",900.0);
Manager.prototype=sagarEmp;
var sagarMgr=new Manager(10,"NGTPractice");
console.log("---------------------")
console.log(" Type Of dispEmpInfo :"+ typeof(sagarMgr.dispMgrInfo)) ;
console.log(" Type Of sagarMgr :"+ typeof(sagarMgr)) ;
console.log("sagarMgr :  "+sagarMgr.dispMgrInfo() + " - "+
sagarMgr.calcEmpAnnualSal());