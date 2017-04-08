import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// disable routing
// import { AuthRoutingModule } from './auth-routing.module';

// Third-party start
import { AuthService } from './auth.service';
// Third-party end

@NgModule({
  imports: [
    CommonModule,
    // AuthRoutingModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class AuthModule { }
