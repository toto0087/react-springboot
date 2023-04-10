export function searchCustomer() {

    if(!localStorage['customers']) {
        localStorage['customers'] = "[]";
    }

    let customers = localStorage['customers'];
    customers=JSON.parse(customers);
    return customers;
}

export function removeCustomer(id: string) {
    let customers = searchCustomer();

    let i = customers.findIndex((customer:any) => customer.id == id);
    customers.splice(i,1);
    localStorage["customers"] = JSON.stringify(customers);
}

export function saveCustomer(customer:any) {
    let customers = searchCustomer();

    if(customer.id) {
        //si existe se edita
        let i = customer.findIndex((c:any)=>c.id==customer.id);
        customer[i] = customer;
    } else {
        //si no existe se crea
        customer.id = Math.round(Math.random() * 1000000);
        customer.push(customer);
    }

    customers.push(customer);
    localStorage["customers"] = JSON.stringify(customers);
    console.log(customers)
}

export function searchCustomerById(id:string) {
    let customers = searchCustomer();
    return customers.find((customer:any) => customer.id == id); 
}

