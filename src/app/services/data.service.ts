import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()

export class DataService 
{
    private colorSource = new BehaviorSubject<string>('#86bef5')
    currentColor = this.colorSource.asObservable();
    constructor() { }
    changeColor(color: string)
    {
        this.colorSource.next(color);
    }
}