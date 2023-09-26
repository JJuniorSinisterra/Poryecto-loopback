import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ProyectDbDataSource} from '../datasources';
import {ItemsAnteproyecto, ItemsAnteproyectoRelations} from '../models';

export class ItemsAnteproyectoRepository extends DefaultCrudRepository<
  ItemsAnteproyecto,
  typeof ItemsAnteproyecto.prototype.id,
  ItemsAnteproyectoRelations
> {
  constructor(
    @inject('datasources.proyectDB') dataSource: ProyectDbDataSource,
  ) {
    super(ItemsAnteproyecto, dataSource);
  }
}
