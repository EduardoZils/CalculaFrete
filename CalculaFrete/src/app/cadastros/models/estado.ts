import { Cidade } from "./cidade";


export class Estado {
    public codigo: number;
    public uf: string;
    public descricao: string;
    public cidadeList: Array<Cidade> = new Array<Cidade>();
}