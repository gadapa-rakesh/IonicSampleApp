import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Plugins } from '@capacitor/core';
const { Keyboard } = Plugins;

@Component({
  selector: 'app-sample-working-form',
  templateUrl: './sample-working-form.page.html',
  styleUrls: ['./sample-working-form.page.scss'],
})
export class SampleWorkingFormPage implements OnInit {

  public sampleForm;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.sampleForm = this.buildSampleForm();
    Keyboard.setAccessoryBarVisible({isVisible: true});
  }

  private buildSampleForm(): FormGroup {
    return this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

}
