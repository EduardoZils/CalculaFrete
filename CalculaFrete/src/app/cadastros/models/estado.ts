import { Cidade } from "./cidade";


export class Estado {
    public estadoId: number;
    public uf: string;
    public descricao: string;
    public cidadeList: Array<Cidade>;
    public valorFrete: number;
}