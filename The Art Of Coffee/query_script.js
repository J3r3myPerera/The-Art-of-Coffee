
let viewbtn = document.getElementById("view-query-btn");
let queryform = document.getElementById("query-form");
let querydata = document.getElementById("query-data")
let queryheading = document.getElementById("query-heading")


let name_input = document.getElementById("name");
let mail_input = document.getElementById("mail");
let query_subject_select = document.getElementById("query-subject");
let query_text = document.getElementById("query-text");

let name_val;
let mail_val;
let query_subject_val;
let query_text_val;

let query_data_name = document.getElementById("query-data-name");
let query_data_mail = document.getElementById("query-data-mail");
let query_data_subject = document.getElementById("query-data-subject");
let query_data_details = document.getElementById("query-data-details");

let editbtn = document.getElementById("edit-query-btn");


querydata.style.display = 'none';

viewbtn.addEventListener("click", viewquery);
editbtn.addEventListener("click", editquery);

function editquery() {
    
    queryheading.innerText = "Enter your queries";
    queryform.style.display ="block";
    querydata.style.display = 'none';


    name_input.value = name_val;
    mail_input.value = mail_val;
    query_subject_select.value = query_subject_val
    query_text.value = query_text_val; 
}


function viewquery(){
    
    name_val = name_input.value;
    mail_val = mail_input.value;
    query_subject_val = query_subject_select.value;
    query_text_val = query_text.value;

    console.log(name_val);
    console.log(mail_val);
    console.log(query_subject_val);
    console.log(query_text_val);

    if (name_val != "" && mail_val != "" && query_subject_val != "" && query_text_val != "") {
        
        queryheading.innerText = "Review your query";
        queryform.style.display ="none";
        querydata.style.display = 'block';

        query_data_name.innerText = name_val;
        query_data_mail.innerText = mail_val;
        query_data_subject.innerText = query_subject_val;
        query_data_details.innerText = query_text_val;
    
    } else {
        
        let alert_str = "Please fill in the\n\n";
        if (name_val == "") {
            
            alert_str += "name field\n\n";
        }

        if (mail_val == "") {
            
            alert_str += "mail field\n\n";
        }

        if (query_subject_val == "") {
            
            alert_str += "query subject field\n\n";
        }

        if (mail_val == "") {
            
            alert_str += "your query.";
        }
        alert(alert_str);
    }
    
    // queryheading.innerText = "Review your query";
    // queryform.style.display ="none";
    // querydata.style.display = 'block';



}