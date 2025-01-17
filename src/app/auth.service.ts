import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router) { }

    auth() {
        this.router.navigate(["registration"])
    }

    logout() {
        console.log("TODO: Доделать выход из аккаунта")
    }
}