Name_of_the_student_array=[];
function submit(){
    var Name_1=document.getElementById("Name_of_the_student_1").value;
    var Name_2=document.getElementById("Name_of_the_student_2").value;
    var Name_3=document.getElementById("Name_of_the_student_3").value;
    var Name_4=document.getElementById("Name_of_the_student_4").value;
    Name_of_the_student_array.push(Name_1);
    Name_of_the_student_array.push(Name_2);
    Name_of_the_student_array.push(Name_3);
    Name_of_the_student_array.push(Name_4);
    console.log(Name_of_the_student_array);
    document.getElementById("display_name").innerHTML=Name_of_the_student_array;
    document.getElementById("Submit_button").style.display="none";
    document.getElementById("Sort_button").style.display="inline-block";
}
function sorting(){
    Name_of_the_student_array.sort();
    console.log(Name_of_the_student_array);
    document.getElementById("display_name").innerHTML=Name_of_the_student_array;
    
}