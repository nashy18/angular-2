import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
    imports: [ //common components & routing
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
          path: '',
          component: LandingComponent
        },
        {
          path: 'chat',
          component: ChatComponent
        }
      ])
  ],
  declarations: [ //component 
    AppComponent,
    LandingComponent,
    ChatComponent
  ],
  providers: [],//services 
  bootstrap: [AppComponent]
})
export class AppModule { }
