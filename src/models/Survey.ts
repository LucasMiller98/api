import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("surveys")
class Survey {

  @PrimaryColumn()
  readonly id: string;
  
  @Column()
  name: string;

  @Column()
  email: string;
  
  @CreateDateColumn()
  created_at: Date

  constructor() {
    // Se o ID do usuário não existir
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export { Survey }