const db = require("../../db/config")

const menuModel = {}
menuModel.getAll = () => {
    return db.all("SELECT * FROM menu",(err,rows) => {
        if(err) {
            throw err
        }else {
            return rows
        }
    })
}
// lanjutkan disini

module.exports = menuModel