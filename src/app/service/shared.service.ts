import { Injectable } from "@angular/core";


@Injectable({
    providedIn:"root"
})
export class SharedService {
        constructor(){}

        public sideMenuToggle: boolean | undefined;
        
}