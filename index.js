//importamos express
import express from 'express' 
import {conectar, agregarProducto} from './src/mysql_conn.js'
//iniciamos express
const app = express()  
//iniciamos servidor
app.listen('8000', function(){
    console.log('app iniciada en port 8000')
})
//configuracion pug
app.set('views', './vistas') 
app.set('view engine', 'pug')
//configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))



app.get('/', function(req, res){
    /*res.send('app start ok')*/
    /*conectar()*/
    res.render('index', {titulo:'app despensa', dato:'grandisima mierda'})
})
app.get('/agregar/:nombre/:cantidad', function(req, res){
    let nombre = req.params.nombre
    let cantidad = req.params.cantidad
    let lugar = req.params.lugar
    let tipo = req.params.tipo
    agregarProducto(nombre, cantidad, lugar, tipo)
    res.redirect('/')

    console.log(nombre, cantidad, lugar, tipo)
})