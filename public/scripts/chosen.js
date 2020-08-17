

function main(){
    const links = document.querySelectorAll("header div a");

    for (const link of links) {
        console.log(link.href)
        if (link.href == window.location.href){
            link.classList.add('chosen');
        }
    }
}

main();