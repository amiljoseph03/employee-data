function addemployee(){
    let name = document.getElementById('ename').value
    let phone = document.getElementById('ephone').value

    console.log(name)
    console.log(phone)

    if(ename.value=='' || ephone.value==''){
        alert("enter value")
    }else{
        li=document.createElement('tr')

        document.getElementById('list').appendChild(li)

        li.innerHTML = `
        
         <td>${name}</td> 
        <td> ${phone}</td>
        <td> <i onClick="edit(this)" class="fa-solid fa-pen"></i></td>
        <td><i onClick="deletee(this)" class="fa-solid fa-trash"></i></td>

        `;
    }
}

function edit(e) {
  let tr = e.parentNode.parentNode; // the <tr> row
  let nameTd = tr.children[0]; // first <td> (name)
  let phoneTd = tr.children[1]; // second <td> (phone)

  let newName = prompt('Edit name:', nameTd.textContent);
  if (newName !== null && newName.trim() !== '') {
    nameTd.textContent = newName.trim();
  }

  let newPhone = prompt('Edit phone:', phoneTd.textContent);
  if (newPhone !== null && newPhone.trim() !== '') {
    phoneTd.textContent = newPhone.trim();
  }
}


function deletee(e){
    let tr = e.parentNode.parentNode; 
    tr.remove()
}