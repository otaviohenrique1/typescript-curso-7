import { Repository } from "typeorm";
import InterfaceAdotanteRepository from "./interfaces/InterfaceAdotanteRepository";
import AdotanteEntity from "../entities/AdotanteEntity";

export default class AdotanteRepository implements InterfaceAdotanteRepository {
  private repository: Repository<AdotanteEntity>;
  constructor(repository: Repository<AdotanteEntity>) {
    this.repository = repository;
  }

  async criaAdotante(adotante: AdotanteEntity): Promise<void> {
    await this.repository.save(adotante);
  }

  listaAdotante(): AdotanteEntity[] | Promise<AdotanteEntity[]> {
    throw new Error("Method not implemented.");
  }

  atualizaAdotante(id: number, adotante: AdotanteEntity): void {
    throw new Error("Method not implemented.");
  }

  deletaAdotante(id: number, adotante: AdotanteEntity): void {
    throw new Error("Method not implemented.");
  }
}
