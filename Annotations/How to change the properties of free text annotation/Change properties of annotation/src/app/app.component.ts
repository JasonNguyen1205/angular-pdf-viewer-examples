import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {
  PdfViewerComponent,
  LinkAnnotationService,
  BookmarkViewService,
  MagnificationService,
  ThumbnailViewService,
  ToolbarService,
  NavigationService,
  TextSearchService,
  TextSelectionService,
  PrintService,
  AnnotationService,
  FormFieldsService,
} from '@syncfusion/ej2-angular-pdfviewer';

/**
 * Default PdfViewer Controller
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    TextSearchService,
    TextSelectionService,
    PrintService,
    AnnotationService,
    FormFieldsService,
  ],
})
export class AppComponent {
  public service: string = 'https://localhost:44399/pdfviewer';
  public document: string = 'PDF_Succinctly.pdf';
  ngOnInit(): void {
  }
  //Method to customize the resizer and annotation's appearance.
  globalChange() {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      viewer.freeTextSettings.annotationSelectorSettings = {
        resizerFillColor: 'yellow',
        resizerBorderColor: 'pink',
        resizerSize: 20,
        selectionBorderColor: 'gray',
        selectionBorderThickness: 10,
      };
      viewer.annotationCollection[i].fillColor = 'black';
      viewer.annotationCollection[i].fontColor = 'gold';
      viewer.annotationCollection[i].fontSize = 20;
      viewer.annotationCollection[i].strokeColor = 'green';
      viewer.annotationCollection[i].thickness = 5;
      viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
    }
  }

  //Method to customize the annotation's fill, stroke, font style.
  specificChange() {
    var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
    for (let i = 0; i < viewer.annotationCollection.length; i++) {
      if (viewer.annotationCollection[i].notes == 'Yes') {
        viewer.annotationCollection[i].fillColor = 'black';
        viewer.annotationCollection[i].fontColor = 'gold';
        viewer.annotationCollection[i].fontSize = 20;
        viewer.annotationCollection[i].strokeColor = 'green';
        viewer.annotationCollection[i].thickness = 5;
        viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
      }
    }
  }
}
