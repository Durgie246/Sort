var listofnames = [];
function Submit(){
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var name4 = document.getElementById("name4").value;

    listofnames.push(name1);
    listofnames.push(name2);
    listofnames.push(name3);
    listofnames.push(name4);

    document.getElementById("display_name").innerHTML = listofnames;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
console.log(listofnames);


} 

function sort(){
    listofnames.sort();
    document.getElementById("display_name").innerHTML = listofnames;
console.log(listofnames);
}