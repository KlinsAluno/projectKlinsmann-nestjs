import { Bind, Res, HttpStatus, Controller, Delete, Get, Param } from '@nestjs/common';

const GATOS = [
  {
    id: 1,
    nome: 'Franeudos',
    corOlhos: 'verde',
    raca: 'sphinx',
  },

  {
    id: 2,
    nome: 'Chico',
    corOlhos: 'azul',
    raca: 'siamês',
  },

  {
    id: 3,
    nome: 'Bizu',
    corOlhos: 'castanho',
    raca: 'rasga-lixo',
  },
];

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return GATOS;
  }

  @Get(':id')
  @Bind(Param(), Res())
  findOne(params, res) {
    const gatoEncontrado = GATOS.find((gato) => gato.id == params.id);
    if (gatoEncontrado) {
      res.status(HttpStatus.OK).json(gatoEncontrado);
    } else {
      res.status(HttpStatus.NOT_FOUND).send();
    }
  }

  @Delete(':id')
  @Bind(Param('id'))
  remove(id) {
    return `Removendo gato com id = ${id}.`;
  }
}
