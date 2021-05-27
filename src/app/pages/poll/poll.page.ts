import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';

interface VoteData {
  Name: string;
  Answer: boolean;
}
@Component({
  selector: 'app-poll',
  templateUrl: './poll.page.html',
  styleUrls: ['./poll.page.scss'],
})
export class PollPage implements OnInit {
  VoteList = [];
  VoteData: VoteData;
  VoteForm: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder
  ) {
    this.VoteData = {} as VoteData;
  }

  ngOnInit() {
    this.VoteForm = this.fb.group({
      Name: ['', [Validators.required]],
      Answer: ['', [Validators.required]],
    });

    this.firebaseService.read_Votes().subscribe((data) => {
      this.VoteList = data.map((e) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Answer: e.payload.doc.data()['Answer'],
        };
      });
      console.log(this.VoteList);
    });
  }

  CreateRecord() {
    console.log(this.VoteForm.value);
    this.firebaseService
      .create_Vote(this.VoteForm.value)
      .then((resp) => {
        this.VoteForm.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_Vote(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAnswer = record.Answer;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Answer'] = recordRow.EditAnswer;
    this.firebaseService.update_Vote(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
