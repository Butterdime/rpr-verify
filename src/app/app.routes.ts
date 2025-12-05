import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UploadComponent } from './features/upload/upload.component';
// Import other components if they exist, otherwise comment them out

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'upload', component: UploadComponent },
    // Add these later as we build them:
    // { path: 'cases', component: CasesComponent },
    // { path: 'disputes', component: DisputesComponent },
];