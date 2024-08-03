const container = document.querySelector(".container");

const rows = 16;
const columns = 16;

// for (let i = 0; i < rows; i++) {
//     const row = document.createElement('div');
//     row.className = "grid";
//     container.appendChild(row);
//     for (let j = 1; j <columns; j++ ){
//         const column = document.createElement("div");
//         column.className = "grid";
//         row.appendChild(column);
//     }
// }


for (let i = 0; i < 16; i++){
    const div = document.createElement('div');
    div.className = "grid";
    container.appendChild(div);
}

function hover(e){
    console.log(e.target);
}

