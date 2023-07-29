// let table = `<table> <tr> 
//                         <th> Heading</th> 
//                         <th> Class </th>
//                     </tr>
            
//             </table>`

let table = "<table> <thead> <tr>";

table += `<th> Name </th> `;
table += `<th> Class </th>`;

table += `</tr> </thead>`;

table += `<tbody> <tr>`;
table += `<td> Nazir</td>`
table += `<td> b.Tech </td>`
table += `</tr>`
table += `<tr>`
table += `<td> Rasik</td>`
table += `<td> Xth</td>`
table += `</tr>`

let DynamicTable = document.getElementById('DynamicTable')
DynamicTable.innerHTML= table

let form=`<form>`;
form += `<input type='text' placeholder='username'><br>`;
form += `<input type='email' placeholder='email'><br>`;
form += `<input type='password' placeholder='password'><br>`;
form += `<input type='date' placeholder='dob'></form>`;

document.getElementById('form').innerHTML=form;

