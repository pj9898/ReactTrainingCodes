//create custom object using inline object creating sytnax

var emp3={
    empid:555,
    empname:"prabhat",
    empsal:129019201930,
   disEmpInfo:function(){
  return this.empid+this.empname+this.empsal;
   }
   


}
/*
console.log(typeof(emp3.disEmpInfo));
console.log(typeof(emp3));
console.log((emp3.disEmpInfo()));
*/

//-----------object inheritance using object-----


//create manager object 
var mgr={
    deptId:12,
    deptName:"HSBC",
    dispMgrInfo:function()
    {
        return this.disEmpInfo() + " DeptId: "+
        this.deptId+ " DeptName:"+this.deptName
    }
}

//inherit the object 
mgr.__proto__=emp3;
console.log(typeof(mgr.dispMgrInfo));
console.log(typeof(mgr));
console.log((mgr.dispMgrInfo()));

//comments fro fithub testing 