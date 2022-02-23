

export class User {
    id!:string;
    username!:string;
    phone!:number;
    website!:string;

    constructor(nom_user: string ,num_user:string ,age_user:number , etat_civil:string ){
        this.id=nom_user;
        this.username=num_user;
        this.phone=age_user;
        this.website=etat_civil;
    }
}


