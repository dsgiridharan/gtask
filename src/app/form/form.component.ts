import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: any;
  @Input() udpateRecord: any;
  @Output() newData = new EventEmitter<any>();
  @Output() udpateData = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.udpateRecord);
    this.initializeForm();
  }

  initializeForm() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
    });

    if (this.udpateRecord) {
      this.form.patchValue({
        title: this.udpateRecord[0].title,
        content: this.udpateRecord[0].content,
      });
    }
  }

  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.udpateRecord) {
      // Write update logic here
      this.udpateData.emit({
        id: this.udpateRecord[0].id,
        title: this.form.value.title,
        content: this.form.value.content,
      });
    } else {
      // Write create logic here
      this.newData.emit({
        title: this.form.value.title,
        content: this.form.value.content,
      });
    }
  }
}
