import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () =>{

    const invoice = getInvoice()
    const {id, name, client, company, items} = invoice
    const {name:clientName, lastName, address} = client
    const { country, city, street, number} = address
    const {name:CompanyName, fiscalNumber:fisNumCompany} = company
    
    return<>

    <div className="m-4 border border-gray-200 rounded-lg ">
        
        <h1 className="block  px-4 py-2 text-4xl font-semibold bg-slate-400 border-b border-gray-200 rounded-t-lg">Ejemplo factura</h1>
            <ul className="flex m-2 p-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                <li className="mr-auto justify-start    ">Nombre factura: {name}</li>
                <li className="ml-auto justify-end ">id: {id}</li>
            </ul>
        <div className="flex   px-4">
            <div className="block  px-4">
                <h3 className="block  px-4 py-2 text-3xl xl font-bold">Datos del cliente</h3>
                <ul className="block  px-4 py-2">
                    <li>{clientName} {lastName}</li>
                    <li>{country}</li>
                    <li>{city}</li>
                    <li>{street}, {number}</li>
                </ul>
            </div>
            <div className="block  px-4">
                <h3 className="block  px-4 py-2 text-3xl xl font-bold">Datos de la empresa</h3>
                <ul className="block  px-4 py-2 ">
                    <li>{CompanyName}</li>
                    <li>{fisNumCompany}</li>
                </ul>
            </div>
        </div>
        <div className="flex-col w-full items-center">
        <h4 className="px-4 py-2 text-3xl xl font-bold">Productos de la factura</h4>
        <table className="px-8 items-center mr-auto ">
            <thead>
                <tr>
                    <th className="text-start px-2 ">Product</th>
                    <th className="text-start px-2 ">Price</th>
                    <th className="text-start px-2 ">Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map( ({id,product, price, quantity}) => (
                    <tr key={id}>
                            <td className="text-start px-2 ">{product}</td>
                            <td className="text-start px-2 ">{price}</td>
                            <td className="text-start px-2 ">{quantity}</td>
                        </tr>
                        )
                        )}
            </tbody>
        </table>
        </div>

    </div>
    </>
}