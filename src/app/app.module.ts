import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';



import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoticesComponent } from './notices/notices.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { environment } from 'src/environments/environment';


import { PostBlogService } from './blog/post-blog.service';
import { PostProjectService } from './projects/post-project.service';
import { AddBlogPostComponent } from './add-blog-post/add-blog-post.component';
import { AddProjectPostComponent } from './add-project-post/add-project-post.component';
import { PostBlogDetailComponent } from './post-blog-detail/post-blog-detail.component';
import { PostProjectDetailComponent } from './post-project-detail/post-project-detail.component';


const appRoutes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'sobre', component: AboutComponent},
  { path: 'contato', component: ContactComponent },
  { path: 'blog', component: BlogComponent},
  { path: 'projetos', component: ProjectsComponent },
  { path: 'addPostBlog', component: AddBlogPostComponent},
  { path: 'addProject', component: AddProjectPostComponent},
  { path: 'blog/:id', component: PostBlogDetailComponent},
  { path: 'projetos/:id', component: PostProjectDetailComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoticesComponent,
    FooterComponent,
    AboutComponent,
    IndexComponent,
    ContactComponent,
    BlogComponent,
    ProjectsComponent,
    AddBlogPostComponent,
    AddProjectPostComponent,
    PostBlogDetailComponent,
    PostProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, scrollPositionRestoration: 'enabled'} // <-- debugging purposes only
    )
  ],
  providers: [PostBlogService, PostProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
