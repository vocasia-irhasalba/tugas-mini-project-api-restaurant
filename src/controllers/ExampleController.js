const menuModel = require("../models/menuModel")

const exampleController = {}

exampleController.getAll = (req,res) => {
    const menus = menuModel.getAll()
    res.json({
        message : menus
    })
}
// silahkan buat varian controller lain sesuai fitur masing masing

module.exports = exampleController