import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {UploadFileService} from '../services/upload-file.service';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  showFile = false;
  fileUploads: Observable<string[]>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.showFile = true;
    this.fileUploads = this.uploadService.getFiles();
  }
}
