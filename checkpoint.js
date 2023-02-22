function check() {
    let menu = ["rau xào","thịt luộc","gà rán"]
    let input = document.getElementById("option").value
    localStorage.setItem('menu',JSON.stringify(menu))
    if (input == "C") {
        var new_food = prompt("Xin mời nhập món mới: ")
        let xu_ly_menu = localStorage.getItem('menu')
        let chinh_sua_menu = JSON.parse(xu_ly_menu)
        chinh_sua_menu.push(new_food)
        localStorage.setItem('new_menu', JSON.stringify(chinh_sua_menu))
    }
    if (input == "R") {
        let doc_menu = localStorage.getItem('new_menu')
        let doc_hieu_menu = JSON.parse(doc_menu)
        console.log(doc_hieu_menu)
        alert("menu hiện tại là: "+doc_hieu_menu.join(', '))
        console.log(doc_hieu_menu.join(','))
        
    }
    
}
