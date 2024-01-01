import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas principales
import { AppRoutingModule } from './app-routing.module';
// Module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPanelComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
