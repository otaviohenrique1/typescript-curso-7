import { Request, Response } from "express";
import type TipoPet from "../tipos/TipoPet";

let listaDePets = [];

export default class PetController {
  criaPet(req: Request, res: Response) {
    const novoPet = req.body as TipoPet;
    listaDePets.push(novoPet);
    return res.status(201).json(novoPet)
  }
}