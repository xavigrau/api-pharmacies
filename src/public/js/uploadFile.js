

const submit=document.getElementById('submit');
submit.addEventListener('click',getData);

function getData(){
    const selectedFile = document.getElementById('fileInput').files[0];
    const div=document.getElementById('code');
    const form=new FormData();
    form.append("json",selectedFile);
    console.log(form.get('name'));
        //Features.insertMany(reader.result).then(r => console.log(r.toString()));
        fetch('/upload', {
            method: 'POST',
            body:form
        })
            .then((response) => response.json())
            //Then with the data from the response in JSON...
            .then((data) => {
                console.log('Success:', data);
            })
            //Then with the error genereted...
            .catch((error) => {
                console.error('Error:', error);
            });
        //div.textContent=reader.result;
}


