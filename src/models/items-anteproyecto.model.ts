import {Entity, model, property} from '@loopback/repository';

@model()
export class ItemsAnteproyecto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<ItemsAnteproyecto>) {
    super(data);
  }
}

export interface ItemsAnteproyectoRelations {
  // describe navigational properties here
}

export type ItemsAnteproyectoWithRelations = ItemsAnteproyecto & ItemsAnteproyectoRelations;
