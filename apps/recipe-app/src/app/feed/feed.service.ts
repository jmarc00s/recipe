import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecipeModel } from '@recipe/models';

const MOCK_RECIPES: RecipeModel[] = [
  {
    title: 'Feijoada',
    description:
      'Feijoada é uma designação comum dada a pratos da culinária de regiões e países lusófonos como Portugal, Brasil, Angola, Moçambique, Timor-Leste e Macau.',
    image:
      'https://cdn.panelinha.com.br/receita/1588270905274-39_Panelinha_12_02_200635.jpg',
  },
  {
    title: 'Feijão tropeiro',
    description:
      ' Feijão Tropeiro saboroso feito com couve, feijão roxinho com linguiça, bacon, farinha de mandioca, com MAGGI Caldo de Costela',
    image:
      'https://d1uz88p17r663j.cloudfront.net/resized/8b6e46f85372b7d6f3687ec642579b50_feijao-tropeiro-receitas-nestle_1200_600.jpg',
  },
  {
    title: 'Acarajé',
    description:
      'O acarajé é uma especialidade gastronômica das culinárias africana e afro-brasileira.',
    image:
      'https://www.sabornamesa.com.br/media/k2/items/cache/eda8d07e2f8b89e75897e379264dc261_XL.jpg',
  },
];

@Injectable()
export class FeedService {
  getRecipes(): Observable<RecipeModel[]> {
    return of(MOCK_RECIPES);
  }
}
