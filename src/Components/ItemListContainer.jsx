import React from 'react'

// const ItemListContainer = ({greeting}) => {  //recibe su prox
//   return (
//     <h1>{greeting}</h1> // la muestra
//   )
// }

const ItemListContainer = () => {  

    let productos = [
        {id: 1, nombre: "AutoA" , descripcion: "descripcion A" , precio:1000000  ,  },
        {id: 1, nombre: "AutoB" , descripcion: "descripcion B" , precio:2000000  ,  },
        {id: 1, nombre: "AutoC" , descripcion: "descripcion C" , precio:3000000  ,  },

    ];

    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout (()=> {
                resolve(productos)
            },5000)
            
        } else {
            reject ("no hay productos para mostrar")
        }
    })

    const aplicarDescuento = new Promise((resolve, reject) => {
        const descuento = true

        if (descuento) {
            resolve ("descuento aplicado")
        } else {
            reject ("no se aplico el descuento")
        }
    })


    mostrarProductos
        .then ((resultado) =>{
            console.log(resultado) //resolve

        })

        .catch ((error)=> {
            console.log(error)
        })

    

    // aplicarDescuento
    //     .then ((resultado) =>{
    //         console.log(resultado) //resolve

    //     })

    //     .catch ((error)=> {
    //         console.log(error)
    //     })


    // console.log (aplicarDescuento)

    return (
      <>
        {
            productos.map((p) => {
                return (
                    <div key={p.id}>
                        <h1>Nombre: {p.nombre}</h1>
                        <h3>Descripcion: {p.descripcion}</h3>
                        <h3>Precio${p.precio}</h3>
                    </div>
                )
            })
        }
      </> 
    )
}

export default ItemListContainer

