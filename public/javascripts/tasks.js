const setTagAsDone = async (element, id) =>{
        event.preventDefault();
    try {
       let headers = new Headers({'Content-Type':'application/json'}); 
       let body = JSON.stringify({task:{done:element.checked}});
       //chamando o back-end//
       let response = await fetch(`/tasks/${id}?_method=put`,{headers: headers, body:body, method:'PUT'})
       let data = await response.json();
       let task = data.task;
       let parent = element.parentNode;

       if(task.done){
            element.checked = true;
            parent.classList.add('has-text-primary');
            parent.classList.add('is-italic');
        } else {
        element.checked = false;
        parent.classList.remove('has-text-primary');
        parent.classList.remove('is-italic');
        }
    } catch (error) {
        alert('Erro ao atualizar a tarefa');
    }
}