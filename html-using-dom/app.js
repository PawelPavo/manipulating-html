document.addEventListener('DOMContentLoaded', function () {


    //----------------Part 1 ---------------------

    //Create a button with a pop up alert
    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me!');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        alert('Hi, thank you for clicking me!');
    })


    //---------------Part 2 --------------------

    //Create a pop up alert with a message from a text box
    document.getElementsByTagName('input')[1].addEventListener('click', function () {
        let textBox = document.getElementsByTagName('input')[0].value;
        alert(textBox);
    })


    //---------------- Part 3 -------------------------

    //Mousing over an empty <div> in order for its background to change color
    let divColor = document.getElementsByTagName('div')[0];
    // divColor.addEventListener('mouseover', function () {
    //     divColor.style.backgroundColor = ' blue'
    // });

    // divColor.addEventListener('mouseout', function () {
    //     divColor.style.backgroundColor = 'white'
    // });

    //Mouisng over a 'div' changes color of 'body' background
    document.getElementsByTagName('div')[0].addEventListener('mouseover', function () {
        divColor.style.backgroundColor = ' red';
        console.log(event);

    });

    document.getElementsByTagName('div')[0].addEventListener('mouseout', function () {
        divColor.style.backgroundColor = ' white';
    });
    //---------------------Part 4 ------------------------

    //Creates a paragraph with a text and when clicked - changes the color of the text to a random color
    let par = document.createElement('p');
    let parText = document.createTextNode('This is the text that can change color if you click it.');
    par.appendChild(parText);
    document.body.appendChild(par);

    par.addEventListener('click', function () {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        par.style.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    });


    //------------------Part 5 --------------------------------

    //Creates a button which when clicked it will display 'name' warapped in 'span' inside a 'div'
    let button2 = document.createElement('button');
    let button2text = document.createTextNode('Click for my name!');
    button2.appendChild(button2text);
    document.body.appendChild(button2);

    let nameDiv = document.createElement('div');
    document.body.appendChild(nameDiv);

    let nameSpan = document.createElement('span');
    let spanText = document.createTextNode('Pawel Jaskolski');
    nameSpan.appendChild(spanText);

    button2.addEventListener('click', function () {
        nameDiv.appendChild(nameSpan);
    });


    //----------------- Part 6 -------------------------------

    //Displays a list of names nested inside a 'ul', each name is wrapped with 'li'.
    let btnClick = document.getElementsByTagName('button')[0];
    let friends = ['Olivia', 'George', 'Isla', 'Noah', 'Emily', 'Charlie', 'Grace', 'Jacob', 'Ava', 'Ella'];
    for (let i = 0; i < friends.length; i++) {
        let name = friends[i];
        let nameList = document.createElement('li');
        let nameText = document.createTextNode(name);
        list = document.getElementsByTagName('ul')[0]
        btnClick.addEventListener('click', function () {
            nameList.appendChild(nameText);
            list.appendChild(nameList);
        });
    }

});
