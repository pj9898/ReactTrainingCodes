//custom object creation using object object 

var emp5 = new Object();
emp5.id=007;
emp5["empname"]="prabhat";
emp5.sal=789292.0;
emp5.disEmpInfo=function(){
    return this.empid+this.empname+this.empsal;
     }

     console.log(typeof(emp5.disEmpInfo));
console.log(typeof(emp5));
console.log((emp5.disEmpInfo()));


//------create manager------
var mgr=Object.create(emp5);
mgr.id=17;
mgr.name=



///by mam
//Custom object creation using object Object
var emp5=new Object();
emp5.empId=8999;
emp5["empName"]="Krishna";
emp5.empSal=78000.0;
emp5.dispEmpInfo=function()
{
    return "EMPID:"+this.empId+ " Name: "+this.empName+
    " Salary: "+this.empSal;
};
emp5.calcEmpAnnualSal=function()
{
    return " Annual Salary: "+this.empSal*12
} 
//-------------------

//--------------Create Manger------------
var krishnaMgr=Object.create(emp5);

krishnaMgr.deptId=60;
krishnaMgr.deptName="Synchrni";
krishnaMgr.dispMgrInfo=function()
{
    return this.dispEmpInfo() + " DeptId: "+
    this.deptId+ " DeptName:"+this.deptName
}
console.log(` Type Of dispMgrInfo : 
              ${typeof(krishnaMgr.dispMgrInfo)}`) ;
console.log(" Type Of krishnaMgr :"+ typeof(krishnaMgr)) ;
console.log("krishnaMgr :  "+krishnaMgr.dispMgrInfo() + " - "+
krishnaMgr.calcEmpAnnualSal());
