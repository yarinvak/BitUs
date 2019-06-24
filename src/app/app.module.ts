import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { RepoTableComponent } from './repo-table/repo-table.component';
import { TopReposComponent } from './top-repos/top-repos.component';
import { HomeComponent } from './home/home.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RepoTableComponent,
    TopReposComponent,
    HomeComponent,
    LeaderboardComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
