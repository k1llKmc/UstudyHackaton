import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { EventsComponent } from './routes/events/events.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'about',
  component: AboutComponent,
},
{
  path: 'events',
  component: EventsComponent,
}
];
