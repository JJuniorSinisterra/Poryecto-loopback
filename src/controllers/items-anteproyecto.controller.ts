import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ItemsAnteproyecto} from '../models';
import {ItemsAnteproyectoRepository} from '../repositories';

export class ItemsAnteproyectoController {
  constructor(
    @repository(ItemsAnteproyectoRepository)
    public itemsAnteproyectoRepository : ItemsAnteproyectoRepository,
  ) {}

  @post('/items-anteproyectos')
  @response(200, {
    description: 'ItemsAnteproyecto model instance',
    content: {'application/json': {schema: getModelSchemaRef(ItemsAnteproyecto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemsAnteproyecto, {
            title: 'NewItemsAnteproyecto',
            exclude: ['id'],
          }),
        },
      },
    })
    itemsAnteproyecto: Omit<ItemsAnteproyecto, 'id'>,
  ): Promise<ItemsAnteproyecto> {
    return this.itemsAnteproyectoRepository.create(itemsAnteproyecto);
  }

  @get('/items-anteproyectos/count')
  @response(200, {
    description: 'ItemsAnteproyecto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ItemsAnteproyecto) where?: Where<ItemsAnteproyecto>,
  ): Promise<Count> {
    return this.itemsAnteproyectoRepository.count(where);
  }

  @get('/items-anteproyectos')
  @response(200, {
    description: 'Array of ItemsAnteproyecto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ItemsAnteproyecto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ItemsAnteproyecto) filter?: Filter<ItemsAnteproyecto>,
  ): Promise<ItemsAnteproyecto[]> {
    return this.itemsAnteproyectoRepository.find(filter);
  }

  @patch('/items-anteproyectos')
  @response(200, {
    description: 'ItemsAnteproyecto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemsAnteproyecto, {partial: true}),
        },
      },
    })
    itemsAnteproyecto: ItemsAnteproyecto,
    @param.where(ItemsAnteproyecto) where?: Where<ItemsAnteproyecto>,
  ): Promise<Count> {
    return this.itemsAnteproyectoRepository.updateAll(itemsAnteproyecto, where);
  }

  @get('/items-anteproyectos/{id}')
  @response(200, {
    description: 'ItemsAnteproyecto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ItemsAnteproyecto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ItemsAnteproyecto, {exclude: 'where'}) filter?: FilterExcludingWhere<ItemsAnteproyecto>
  ): Promise<ItemsAnteproyecto> {
    return this.itemsAnteproyectoRepository.findById(id, filter);
  }

  @patch('/items-anteproyectos/{id}')
  @response(204, {
    description: 'ItemsAnteproyecto PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemsAnteproyecto, {partial: true}),
        },
      },
    })
    itemsAnteproyecto: ItemsAnteproyecto,
  ): Promise<void> {
    await this.itemsAnteproyectoRepository.updateById(id, itemsAnteproyecto);
  }

  @put('/items-anteproyectos/{id}')
  @response(204, {
    description: 'ItemsAnteproyecto PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() itemsAnteproyecto: ItemsAnteproyecto,
  ): Promise<void> {
    await this.itemsAnteproyectoRepository.replaceById(id, itemsAnteproyecto);
  }

  @del('/items-anteproyectos/{id}')
  @response(204, {
    description: 'ItemsAnteproyecto DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.itemsAnteproyectoRepository.deleteById(id);
  }
}
