const users = [
    {name: 'peter', email: 'peter@gmail.com', id:'1'},
    {name: 'peter2', email: 'peter2@gmail.com', id: '2'}
]
export class User{
    static findAll():Promise<any[]>{
        return Promise.resolve(users)
    }

    static findById(id: string):Promise<any>{
        return new Promise(resolve=>{
            const filter = users.filter(user=> user.id ===id)
            let user = undefined
            if(filter.length>0){
                user = filter[0]
            }
            resolve(user)
        })
    }
}