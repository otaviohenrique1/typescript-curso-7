import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  especie: string;
  
  @Column()
  dataDeNascimento: Date;
  
  @Column()
  adotado: boolean;
}