import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentManagerComponent } from './student-manager/student-manager.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [



  {
    //localhost://4200 main path '' null aayirikkum, pathMatch :full ee path lekku thanne varanam

    path: '', redirectTo: 'student/main', pathMatch: 'full'

  },

  {
    //localhost://4200/student/main
    //here component name is get from corresponding component ts (typescript) file where export class after appeared is component name copy paste it here
    // after paste here an error display in code fix it by Quick fixing and import there

    path: 'student/main', component: StudentManagerComponent

  },

  //localhost://4200/student/add
  {
    path: 'student/add', component: AddStudentComponent
  },

  //localhost://4200/contact/update
  {
    //id is given here because particular contact id is passing here
    path: 'student/update/:Id', component: UpdateStudentComponent
  },

  //localhost://4200/contact/view
  {
    //path setting of view component
    path: 'student/view/:contactId', component: ViewStudentComponent
  },
  {
    //path:** kodukunnad create chayyatha((not created) path kodummboo page not found varanam  functions onnum undaavilla
    path: '**', component: PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
