const btnSave = document.getElementById("btn-save");
const btnClean = document.getElementById("btn-clean");
const form = document.getElementById("create-form");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnEdit = document.getElementById("btn-edit");

const newTitle = document.getElementById("title");
const newContent = document.getElementById("content");
const newLink = document.getElementById("link");

const editTitle = document.getElementById("editTitle");
const editContent = document.getElementById("editContent");
const editLink = document.getElementById("editLink");

const url = ''

// limpiar form
btnClean.addEventListener('click', () =>{
    form.reset()
})

// evento submit en formulario nuevo post
form.addEventListener("submit", (event) => {
    event.preventDefault();
      const newPost = {
        title: newTitle.value,
        content: newContent.value,
        link: newLink.value,
      };
  
      fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      }).then(res => {
        console.log(res)
          if (res.ok) {
            location.reload();
          }
        })
        .catch((err) => {
          console.error(err);
        });
 });

// evento click en boton para eliminar post
document.addEventListener('click', (event) => {
  if (event.target.matches('#delete')) {
      const rowPost = event.target.closest('.row-post')
      const idPost = rowPost.dataset.id

      fetch(`http://localhost:3000/api/posts/${idPost}`, {
          method: 'DELETE'
      }).then(res => {
          if (res.ok) {
              rowPost.remove()
              //location.reload();
          }
      }).catch(err => {
          console.error(err)
      })
  }
})

// evento click en boton para obtenet post a editar
document.addEventListener("click", (event) => {
  if (event.target.matches("#edit")) {
    const rowPost = event.target.closest('.row-post')
    const idPost = rowPost.dataset.id

  fetch(`http://localhost:3000/api/posts/${idPost}`)
    .then(res => res.json())
    .then(data => mostrarData(data))
    .catch(err => console.error(err))
  
    const mostrarData = (data) => {
      let idForm = data.id;
      editTitle.value = data.title;
      editContent.value = data.content;
      editLink.value = data.link;
      myModal.show();
    }       
  }
});
