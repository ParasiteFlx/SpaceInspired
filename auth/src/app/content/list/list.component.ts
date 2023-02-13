import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ItemData {
  id: string;
  projectName: string;
  startDate: string;
  finalDate: string;
  results : string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  //data.projectName?: string  

  constructor(private httpClient : HttpClient) { }

  i = 0;
  editId: string ="";
  listOfData: ItemData[] = [];

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
 
    const index = this.listOfData.findIndex(d => d.id === this.editId);
    if (index !== -1) {
    let projectNameInput = document.getElementById('projectNameInput') as HTMLInputElement
    let startDateInput = document.getElementById('startDateInput')! as HTMLInputElement
    let finalDateInput = document.getElementById('finalDateInput')! as HTMLInputElement
    let resultsInput = document.getElementById('resultsInput')! as HTMLInputElement
    
    this.listOfData[index].projectName = projectNameInput.value;
    this.listOfData[index].startDate = startDateInput.value ;
    this.listOfData[index].finalDate = finalDateInput.value;
    this.listOfData[index].results = resultsInput.value;
  }
  this.editId = '';
  this.saveList();

    
    //this.listOfData[parseInt(this.editId)] =
   /* this.listOfData[parseInt(this.editId)].startDate = 
    this.listOfData[parseInt(this.editId)].finalDate = document.getElementById('projectNameInput') as unknown as string
    this.listOfData[parseInt(this.editId)].results = 
      
    this.editId = "";
    this.saveList();*/
  
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: `${this.i}`,
        projectName: 'Altair Project',
        startDate: Date(),
        finalDate: 'Type the final date here!',
        results: 'Type  the results here!'
      }
    ];
    this.i++;
    this.saveList();
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
    this.saveList();
  }

  ngOnInit(): void {
    this.addRow();
  }

  saveList()
  {
    for( let j = 0; j < this.listOfData.length; j++)
    {
      this.httpClient.post<any>("http://localhost:3000/projects",this.listOfData[j])
      .subscribe(res => {
    
    })
    }
      
  }
}

 

