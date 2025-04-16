import { Injectable } from "@angular/core";
import { Subject } from "rxjs"; 

@Injectable({
    providedIn: 'root'
})

export class NotificationService {
    private notificationSubject = new Subject<string>();

    // constructor(private snackBar: MatSnackBar) {
    //     this.notificationSubject.subscribe((message)=> this.snackBar.open(message, 'Close', {
    //         duration: 3000,
    //         verticalPosition: 'top'
    //     }))
    // }

    showNotification(message: string) {
        this.notificationSubject.next(message);
    }
}