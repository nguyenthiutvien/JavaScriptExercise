
function functionBuy(){
    var drink = document.getElementById('drink');
    var valueDrink = drink.options[drink.selectedIndex].value;
    var fruit = document.getElementById('fruit');
    var valueFruit = fruit.options[fruit.selectedIndex].value;
    var money = parseInt(document.getElementById('money').value);
    
    var changeDrink;
    var changeFruit;
    
    switch (valueDrink){
        case "Nước suối":{
            document.getElementById('nameDrink').innerHTML=" nước suối,";
            changeDrink = money - 15000;
            break;
        } case "COCA COLA":{
            document.getElementById('nameDrink').innerHTML=" coca cola,";
            changeDrink = money - 17000;
            break;
        }
        case "7 UP":
        {
            document.getElementById('nameDrink').innerHTML=" 7 up,";
            changeDrink = money - 17000;
            break;
        } case "PESSI":{
            document.getElementById('nameDrink').innerHTML=" Pessi,";
            changeDrink = money - 17000;
            break;
        } case "CAM ÉP":{
            document.getElementById('nameDrink').innerHTML=" cam ép,";
            changeDrink = money - 17000;
            break;
        } case "STING":{
            document.getElementById('nameDrink').innerHTML=" sting,";
            changeDrink = money - 17000;
            break;
        }
        case "BÒ HÚC":{
            document.getElementById('nameDrink').innerHTML=" bò húc,";
            changeDrink = money - 20000;
            break;
        }

        default:
            changeDrink = money;
            break;
        
    }
    switch (valueFruit){
        case "Trái cây nhỏ":
            {
                document.getElementById('nameFruit').innerHTML=" trái cây nhỏ";
                changeFruit = changeDrink - 99000;
                break;
            }
        case "Trái cây lớn":
            {
                document.getElementById('nameFruit').innerHTML=" trái cây lớn";
                changeFruit = changeDrink - 129000;
                break;
            }
        case "Bưởi":
            {
                document.getElementById('nameFruit').innerHTML=" bưởi";
                changeFruit= changeDrink - 189000;
                break;
            }
        default:
            changeFruit=changeDrink;
            break;
    }
    

    if ((money<changeDrink) ||(changeFruit<0)){
        alert("You haven't enough money");
        document.getElementById('nameDrink').innerHTML="";
        document.getElementById('nameFruit').innerHTML="";
        
    }else
    document.getElementById('bill').value = changeFruit;
    document.getElementById('message').innerHTML="Bạn đã đặt hàng thành công"
    
}
function functionCancle(){
    document.getElementById('drink').value ="";
    document.getElementById('fruit').value="";
    document.getElementById('money').value= "";
    document.getElementById('bill').value="";
    document.getElementById('nameDrink').innerHTML="";
    document.getElementById('nameFruit').innerHTML="";


}
