conststudentInfo = require("../Project/PersonInfoData");

class LibarayBookService{
    studentInfoList= new Array();

    insert(studentInfoList){
        try{
            let studentInfo = new StudentInfo();
            studentInfo.fName = prompt("Enter the Full Name:");
            studentInfo.idName = prompt("Enter the id Name:");
            studentInfo.addressName = prompt("Enter the address Name:");
            studentInfo.libarayCardNo = prompt("Enter the libarayCardNo:");
            studentInfo.bookNameId = prompt("Enter the bookNameId:");
            studentInfoList.push(studentInfo);
            return studentInfoList;


        }catch(e){
            console.error(e);


        }
    
    }

     editName(studentIfoList, fName){
         studentInfoList.forEach(element => {
             if((element.fName == fName) == true){
                
                 console.log("Press 1 to edit FName");
                 console.log("Press 2 to edit AdName");
                 console.log("Press 3 to edit Address Name")
                 console.log("Press 4 to edit LiabarayCardNo");
                 console.log("Press 5 to edit BookNameId");
                 let option = parseInt(prompt("Enter your choice : "));
                 let studentInfo = new StudentInfo();


                 switch ( option ) {
                    case 1:
                        studentInfo.fName = prompt("Enter Full Name : "); 
                        element.fName =studentInfo.lName;
                        break;
                    case 2:
                       studentInfo.idName = prompt("Enter idName : "); 
                        element.idName =studentInfo.idName;
                        break;
                    case 3:
                       studentInfo.addressName = prompt("Enter Address : "); 
                        element.addressName =studentInfo.addressName;
                        break;
                    case 4:
                       studentInfo.libarayCardNo = prompt("Enter LibarayCardNo : "); 
                        element.libarayCardNo =studentInfo.libarayCardNo;
                        break;
                    case 5:
                       studentInfo.bookNameId = prompt("Enter BookNameId : "); 
                        element.bookNameId =studentInfo.bookNameId;
                        break;
                   
                    default:
                        console.log("You have entered invalid input!");
                        break;
                }
            }
        });
        returnstudentInfoList;
    }
}