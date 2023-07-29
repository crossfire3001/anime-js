const bgElements = () => {
    const elements = document.querySelectorAll(".set-bg");

    elements.forEach((element) => {
        element.style.backgroundImage = `url(${element.dataset.setbg})`;
    })


/*    for(let i = 0; i < elements.length; i++) {
        const src = elements[i].dataset.setbg;

        elements[i].style.backgroundImage = `url(${src})`;
    } */

    const array = [1, 2, 3, 4, 5];

    const newArray = array.filter((item) =>  item <= 3);

//    console.log(newArray);

    const arrayTwo = [5, 3, 2, 4, 6];

    const newArrayTwo = arrayTwo.sort();

//    console.log(newArrayTwo);

    const arrayThree = [
        {
           id: 0, value: 100

        },
        {
            id: 2, value: 300
        },
        {
            id: 3, value: 200
        }
    ]

    const newArrayThree = arrayThree.sort((a, b) => {
        return a.value - b.value;
    });

//    console.log(newArrayThree);

}

bgElements();

