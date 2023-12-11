import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";
import EnumEspecie from "../enum/EnumEspecie";
import PetRepository from "../repositories/PetRepository";
import PetEntity from "../entities/PetEntity";

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

let listaDePets: Array<TipoPet> = [];

export default class PetController {
  constructor(private repository: PetRepository) {}

  async criaPet(req: Request, res: Response) {
    const { adotado, especie, dataDeNascimento, nome } = <PetEntity>req.body;
    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(400).json({ error: "Especie inválida" });
    }
    const novoPet = new PetEntity(nome, especie, dataDeNascimento, adotado);

    await this.repository.criaPet(novoPet);
    return res.status(201).json(novoPet)
  }

  async listaPets(req: Request, res: Response) {
    const listaDePets = await this.repository.listaPet();
    return res.status(200).json(listaDePets);
  }

  async atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { success, message } = await this.repository.atualizaPet(
      Number(id),
      req.body as PetEntity
    );
  
    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }

  deletaPet(req: Request, res: Response) {
    const { id } = req.params;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }
    const index = listaDePets.indexOf(pet);
    listaDePets.splice(index, 1);
    return res.status(200).json({ mensagem: "Pet deletado com sucesso" });
  }
}