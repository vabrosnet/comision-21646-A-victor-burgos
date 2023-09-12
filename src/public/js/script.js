//Declaración de constantes
const btnSave = document.getElementById("btn-save");
const btnClean = document.getElementById("btn-clean");
const form = document.getElementById("create-form");
const formEdit = document.getElementById("edit-form");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnEdit = document.getElementById("btn-edit");

const newTitle = document.getElementById("title");
const newContent = document.getElementById("content");
const newLink = document.getElementById("link");

const editTitle = document.getElementById("editTitle");
const editContent = document.getElementById("editContent");
const editLink = document.getElementById("editLink");

//Declaración de variables
let idEditPost = ''

// limpiar form
btnClean.addEventListener('click', () =>{
    form.reset()
})

// evento submit en formulario nuevo post
form.addEventListener("submit", (event) => {
    event.preventDefault();
      const newPost = {
        title: newTitle.value.toUpperCase(),
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
            Swal.fire(
              'Post created!',
              'Sucesfully!',
              'success'
            )
            setTimeout(() => {
              location.reload();
            }, "3000");
          }
        })
        .catch((err) => {
          console.error(err);
        });
 });

// evento click en boton para eliminar post
document.addEventListener('click', (event) => {
  if (event.target.matches('#delete')) {
      const rowPost = event.target.closest('.row-post');
      const idPost = rowPost.dataset.id;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/api/posts/${idPost}`, {
            method: 'DELETE',
          })
            .then((res) => {
              if (res.ok) {
              rowPost.remove();
            }
          })
          .catch((err) => {
          console.error(err);
          });
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
     });
    }
});


// evento click en boton para obtenet post a editar
document.addEventListener("click", (event) => {
  if (event.target.matches("#edit")) {
    const rowPost = event.target.closest('.row-post')
    const idPost = rowPost.dataset.id
    idEditPost = idPost

  fetch(`http://localhost:3000/api/posts/${idPost}`)
    .then(res => res.json())
    .then(data => mostrarData(data))
    .catch(err => console.error(err))
  
    const mostrarData = (data) => {
      idEditPost = data.id;
      editTitle.value = data.title;
      editContent.value = data.content;
      editLink.value = data.link;
      myModal.show();
    }       
  }
});

// evento submit en formulario editar post
formEdit.addEventListener("submit", (event) => {
  event.preventDefault();
    const editPost = {
      title: editTitle.value.toUpperCase(),
      content: editContent.value,
      link: editLink.value,
    };

    fetch(`http://localhost:3000/api/posts/${idEditPost}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editPost)
    }).then(res => {
      if(res.ok){
        Swal.fire(
          'Post edited!',
          'Sucesfully!',
          'success'
        )

        setTimeout(() => {
          myModal.hide();
          location.reload();
        }, "3000");
      }
    })

});