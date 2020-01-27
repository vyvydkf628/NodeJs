// Object property shorthand

const name = 'andrew'

const userage = 27

const user ={
    name,
    age: userage,
    location: 'jeju'
}
console.log(user)

//Object destucturing

const product = {
    label: 'Red notebook',
    prices: 3,
    stock: 201,
    salePrice:undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel,stock, rating =5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type,{ label,stock}={})=>{
    console.log(type,label,stock)
} 

transaction('order',product)