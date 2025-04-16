import { Routes } from '@angular/router';
import { PatGridComponent } from './components/pat-grid/pat-grid.component';
import { PatDetailsComponent } from './components/pat-details/pat-details.component';

export const routes: Routes = [
    {
        path: '', component: PatGridComponent
    },
    {
        path: 'pat/:id', component: PatDetailsComponent
    },
    {
        path: '**', redirectTo: ''
    }
];
