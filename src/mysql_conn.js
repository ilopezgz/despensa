//importar mi mysql
import mysql from 'mysql'

//crear conexion
const conector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'despensa'
})

const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectados')
    })
}
const agregarProducto = (nombre, cantidad) => {
    const cantidadInt = parseInt(cantidad)
    const sql = `INSERT INTO productos (id, nombre, cantidad, lugar, tipo) VALUES (${null}, "${nombre}", ${cantidadInt}, ${cantidadInt}, ${cantidadInt})`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

export {conectar, agregarProducto}