export class Product
{
    nazwa: string;
    cena: number;
    dataUtworzenia: Date;
    czyPromocja: boolean;
    liczbaSztuk: number;
    zwin: boolean;


    constructor(nazwa: string,  cena: number, dataUtworzenia: Date, 
        czyPromocja: boolean,liczbaSztuk: number,zwin:boolean)
    {
        this.nazwa=nazwa;
        this.cena=cena;
        this.dataUtworzenia=dataUtworzenia;
        this.czyPromocja=czyPromocja;
        this.liczbaSztuk=liczbaSztuk;
        this.zwin=zwin;
    }
}
