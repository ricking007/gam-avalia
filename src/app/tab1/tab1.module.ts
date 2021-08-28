import { AvaliacaoComponent } from './../components/avaliacao/avaliacao.component';
import { TenantComponent } from './../components/tenant/tenant.component';
import { PessoaComponent } from './../components/pessoa/pessoa.component';
import { PessoaTipoComponent } from './../components/pessoa-tipo/pessoa-tipo.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,

  ],
  declarations: [Tab1Page,PessoaTipoComponent,PessoaComponent,TenantComponent,AvaliacaoComponent]
})
export class Tab1PageModule {}
