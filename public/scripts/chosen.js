

function main(){
    const links = document.querySelectorAll("header div a");

    for (const link of links) {

        if (window.location.href.includes(link.href)){
            link.classList.add('chosen');
        }
    }
}

main();