import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule,
  MatTreeModule, MatTooltipModule, MatToolbarModule,
  MatTabsModule, MatTableModule, MatSortModule, MatSnackBarModule,
  MatSlideToggleModule, MatSliderModule, MatSidenavModule,
  MatSelectModule, MatRippleModule, MatRadioModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatPaginatorModule,
  MatNativeDateModule, MatMenuModule, MatListModule, MatIconModule,
  MatGridListModule, MatExpansionModule, MatDividerModule, MatDialogModule,
  MatDatepickerModule, MatStepperModule, MatChipsModule, MatCheckboxModule,
   MatButtonToggleModule, MatBottomSheetModule, MatBadgeModule, MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import {MatCardModule} from '@angular/material/card';
import { from } from 'rxjs';
const modules = [
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
