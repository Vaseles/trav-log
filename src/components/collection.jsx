import React from 'react';


//get api and json
async function getUsers() {
  let url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log('I dont work,  \n\n   '+ error);
  }
}
async function renderUsers() {
  let posts = await getUsers();
  let html = '';
  for (let post of posts) {
      let htmlSegment = `<div class ="collection__article">
                          <h3>${post.title}</h3>
                          <p class="mini">${post.body}</p>
                      </div>`;

      html += htmlSegment;
  };

  let container = document.querySelector('.collection__item');
  container.innerHTML = html;
}
renderUsers();


function Collection() {
  return (
    <div className='collection'>
        <h1>Posts</h1>
        <p className='mini'>I took this from https://jsonplaceholder.typicode.com/posts</p>
        <div className="container">
          <div className="collection__item">

          </div>
        </div>
    </div>
  )
}

export default Collection