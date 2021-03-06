import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserService } from './Services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import{RouterModule,Router} from '@angular/router';
import { IconsComponent } from './Component/icons/icons.component';
import {MatMenuModule} from '@angular/material/menu';
import { DisplaynoteComponent } from './Component/displaynote/displaynote.component';
import { AddnoteComponent } from './Component/addnote/addnote.component';
import { NotesComponent } from './Component/notes/notes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NoteservicesService } from './Services/noteservices.service';
import { EditNoteComponent } from './Component/edit-note/edit-note.component';
import { TrashComponent } from './Component/trash/trash.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import { ReminderComponent } from './Component/reminder/reminder.component';
import { SearchComponent } from './Component/search/search.component';
import { CollaboratorComponent } from './Component/collaborator/collaborator.component';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LabelComponent } from './Component/label/label.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    IconsComponent,
    DisplaynoteComponent,
    AddnoteComponent,
    NotesComponent,
    EditNoteComponent,
    TrashComponent,
    ArchiveComponent,
    ReminderComponent,
    SearchComponent,
    CollaboratorComponent,
    LabelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
   FormsModule,
   MatSnackBarModule,
   HttpClientModule,
   MatToolbarModule,
   MatSidenavModule,
   MatIconModule,
   MatTooltipModule,
   MatListModule,
   MatMenuModule,
   RouterModule.forRoot([]),
   MatDialogModule,
   MatDatepickerModule,
   MatSelectModule,
   MatNativeDateModule,
   MatChipsModule,
   MatDividerModule,
   MatCheckboxModule
  ],
  entryComponents:[EditNoteComponent, CollaboratorComponent],
  providers: [UserService,NoteservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
