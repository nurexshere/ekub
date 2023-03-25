var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];


var n=1;
var x=0;

function AddRow(){
    var Addrow=document.getElementById("tableHead");
    var NewRow=Addrow.insertRow(n);
    
    list1[x]=document.getElementById("name").value ;
    list2[x]=document.getElementById("Lname").value ;
    list3[x]=document.getElementById("phonenu").value ;
    list4[x]=document.getElementById("ekubtype").value ;
    list5[x]=document.getElementById("date").value ;
   

    var cel1=NewRow.insertCell(0);
    var cel2=NewRow.insertCell(1);
    var cel3=NewRow.insertCell(3);
    var cel4=NewRow.insertCell(4);
    var cel5=NewRow.insertCell(5);
    

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];
    cel5.innerHTML=list5[x];
   

    n++;
    x++;
    document.querySelector('#tableBody').addEventListener('click',(e)=>{
        //Call to UI function that removes entry from the table
        UI.deleteEntry(e.target);
        //Get license plate to use as unique element of an entry
        var licensePlate = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        //Call to Store function to remove entry from the local storage
        Store.removeEntries(licensePlate);
        //Show alert that entry was removed
        UI.showAlert('Car successfully removed from the parking lot list','success');
    })
}