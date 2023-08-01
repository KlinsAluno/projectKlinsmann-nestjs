import { Controller, Get } from '@nestjs/common';

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
}
