import { Component, OnInit } from '@angular/core';
import {
  LinkAnnotationService, BookmarkViewService, MagnificationService,
  ThumbnailViewService, ToolbarService, NavigationService,
  AnnotationService, TextSearchService, TextSelectionService,
  PrintService
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  // specifies the template string for the PDF Viewer component
  template: 
    `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                       [serviceUrl]='service'
                       style="height:640px;display:block"
                       [toolbarSettings]="toolbarSettings">
                </ejs-pdfviewer>
             </div>`,

  providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
    ThumbnailViewService, ToolbarService, NavigationService,
    AnnotationService, TextSearchService, TextSelectionService,
    PrintService]
})
export class AppComponent implements OnInit {
  public service = 'https://localhost:44327/pdfviewer';
  public toolbarSettings = {
    showTooltip: true,
    toolbarItems: [
      "DownloadOption",
      "UndoRedoTool",
      "PageNavigationTool",
      "MagnificationTool",
      "PanTool",
      "SelectionTool",
      "CommentTool",
      "SubmitForm",
      "SearchOption",
      "AnnotationEditTool",
      "FormDesignerEditTool",
      "PrintOption"
    ]
  };
  ngOnInit(): void {
  }
}