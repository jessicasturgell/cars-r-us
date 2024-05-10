export const orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel&_expand=model")
    const orders = await fetchResponse.json()
  
    let ordersHTML = ""
    for (const order of orders) {

        const totalPrice = (order.paint.price + order.interior.price + order.technology.price + order.wheel.price) * order.model.price
  
      ordersHTML += `<div>Order Number: ${order.id}</div>
                    <div>Paint: ${order.paint.color}</div>
                    <div>Interior: ${order.interior.style}</div>
                    <div>Technology: ${order.technology.package}</div>
                    <div>Wheels: ${order.wheel.type}</div>
                    <div>Vehicle Model: ${order.model.model}</div>
                    <div>Total Price: ${totalPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>`
      ordersHTML += "<hr>" // add a horizontal line between orders
    }
  
    return ordersHTML
}