import EnumEspecie from "../enum/EnumEspecie";

type TipoPet = {
  id: number;
  nome: string;
  especie: EnumEspecie;
  // especie: string;
  // idade: number;
  dataDeNascimento: Date;
  adotado: boolean;
}

export default TipoPet;