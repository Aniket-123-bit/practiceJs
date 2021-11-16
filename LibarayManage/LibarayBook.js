let userMenu = new UserMenu();
let libarayBookService = new LibarayBookService();
let studentInfoList = new Array();
flag = true;

while(flag){
    let option = userMenu.menu();
    switch(option){
        case 1:
            studentInfoList = Array.from(libarayBookService.insert(studentInfoList));
            break;
            case 2:
                console.log(studentInfoList);
                break;
                case 3:
                    let name = prompt("Enter the Name:");
                    studentIfoList= libarayBookService.editName(studentInfoList,name);
                    break;
                    case 4:
                        flag = false;
                        break;
                        default:
                            console.log("You have invalid input!!");
                            flag = false;
                            break;

    }
}
