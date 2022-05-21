// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",
            "cidade": "Belo Horizonte",
            "categoria": "Donos de Pet",
            "email": "Sincere@april.biz",
            "telefone": "1-770-736-8031",
            "imagem" : "https://w7.pngwing.com/pngs/643/454/png-transparent-business-game-avatar-computer-program-google-smart-object-game-child-face.png " ,
            "senha" : "12332423"
            
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "cidade": "Betim",
            "categoria": "Ajudante",
            "email": "Shanna@melissa.tv",
            "telefone": "010-692-6593",
            "imagem": "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-men-modelling-agency-flaticons-lineal-color-flat-icons.png"  ,
            "senha" : "12353523"
            
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "cidade": "Rio de Janeiro",
            "categoria": "Donos de Pet",
            "email": "Nathan@yesenia.net",
            "telefone": "1-463-123-4447",
            "imagem": "https://img.icons8.com/color/344/user-female-skin-type-4.png" ,
            "senha" : "1232sdsfd3"
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "cidade": "Betim",
            "categoria": "Ajudante",
            "email": "Julianne.OConner@kory.org",
            "telefone": "493-170-9623 x156",
            "imagem": "https://img.icons8.com/color/344/circled-user-male-skin-type-1-2--v1.png" ,
            "senha" :"123gfgdf23"
            
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "cidade": "São Paulo",
            "categoria": "Donos de Pet",
            "email": "Lucio_Hettinger@annie.ca",
            "telefone": "(254)954-1289",
            "imagem": "https://img.icons8.com/color/344/boy-avatar.png" ,
            "senha" : "1fdfds2323"
           
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "cidade": "Rio de Janeiro",
            "categoria": "Ajudante",
            "email": "Karley_Dach@jasper.info",
            "telefone": "1-477-935-8478",
            "imagem": "https://img.icons8.com/dusk/2x/pin-2.png",
            "senha" : "fdfds12323"
           
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "cidade": "Belo Horizonte",
            "categoria": "Ajudante",
            "email": "Telly.Hoeger@billy.biz",
            "telefone": "210.067.6132",
            "imagem": "https://img.icons8.com/color/344/user-female-skin-type-4.png ",
            "senha" : "123343fds23"
            
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "cidade": "Belo Horizonte",
            "categoria": "Ajudante",
            "email": "Sherwood@rosamond.me",
            "telefone": "586.493.6943",
            "imagem": "https://img.icons8.com/dusk/2x/command-line.png",
            "senha" : "1232fs3"
            
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "cidade": "Betim",
            "categoria": "Donos de Pet",
            "email": "Chaim_McDermott@dana.io",
            "telefone": "(775)976-6794",
            "imagem": "https://img.icons8.com/dusk/2x/code.png",
            "senha" : "12323"
            
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "cidade": "São Paulo",
            "categoria": "Donos de Pet",
            "email": "Rey.Padberg@karina.biz",
            "telefone": "024-648-3804",
            "imagem": "https://img.icons8.com/dusk/2x/bug.png",
            "senha" : "123345s323",
            
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria,
        "imagem": contato.imagem,
        "senha": contato.senha,
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria,
    db.data[index].imagem = contato.imagem,
    db.data[index].senha = contato.senha,


    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

const imgDiv = document.querySelector('#foto');
const img = document.querySelector('#foto img');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

imgDiv.addEventListener('mouseenter',function()
{
    uploadBtn.style.display = "block"
});
imgDiv.addEventListener('mouseleave',function()
{
    uploadBtn.style.display = "none"
});
file.addEventListener('change',function(){
    const choosedFile = this.files[0];
    if(choosedFile){
        const reader = new FileReader();
        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result)
        });
        reader.readAsDataURL(choosedFile);
    }
})
