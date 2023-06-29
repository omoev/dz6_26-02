const btn = document.querySelector('.btn');
const prevBtn = document.querySelector('.btn-prev');
const block = document.querySelector('.block');
let num = 1;

const fetchData = () => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(todoItem => {
      console.log(todoItem);
      block.innerHTML = `
        <div class="card">
          <h3>${todoItem.title}</h3>
          <h3>${todoItem.completed}</h3>
          <h3>${todoItem.id}</h3>
        </div>
      `;
    });
};

const handleNextClick = () => {
  if (num < 200) {
    num++;
    fetchData();
  }
};

const handlePrevClick = () => {
  if (num > 1) {
    num--;
    fetchData();
  }
};

btn.addEventListener('click', handleNextClick);

prevBtn.addEventListener('click', handlePrevClick);