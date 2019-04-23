import { Cep } from "./cep";
import { Estado } from "./estado";


export class Cidade {
    public codigo: number;
    public descricao: string;
    public cepList: Array<Cep>;
    public estado: Estado;
}

