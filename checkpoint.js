function check() {
    let menu = ["rau xào","thịt luộc","gà rán"]
    let input = document.getElementById("option").value
    localStorage.setItem('menu',JSON.stringify(menu))
    if (input == "C") {
        var new_food = prompt("Xin mời nhập món mới: ")
        let xu_ly_menu = localStorage.getItem('menu')
        let chinh_sua_menu = JSON.parse(xu_ly_menu)
        chinh_sua_menu.push(new_food)
        let menu = localStorage.setItem('new_menu', JSON.stringify(chinh_sua_menu))
    }
    if (input == "R") {
        let doc_menu = localStorage.getItem('new_menu')
        let doc_hieu_menu = JSON.parse(doc_menu)
        alert("menu hiện tại là: ",doc_hieu_menu.join(", "))
        
    }
    if (input == "U") {
        let edit_food = prompt("Xin mời nhập món ăn muốn thay đổi")
        let update_menu = localStorage.getItem('new_menu')
        let update_menu_array = JSON.parse(update_menu)
        if (update_menu_array.indexOf(edit_food) != -1) {
            let edit_new_food = ("Xin mời nhập món ăn mới: ")
            let new_menu = update_menu_array.splice(update_menu_array.indexOf(edit_food), edit_new_food)
            localStorage.setItem('new_menu', JSON.stringify('new_menu'))
        }
    }
}
