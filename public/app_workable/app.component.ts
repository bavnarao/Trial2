import { Component } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {TopNavComponent} from './topnav';
import {SidebarComponent} from './sidebar';
import {MainNavComponent} from './mainnav';
import {routingComponents} from './app-routing.module';

@Component({
  selector: 'app',
  
 template: `
 <svg xmlns="http://www.w3.org/2000/svg" class="icon-store"><symbol id="icon-add-2x" 
viewBox="0 0 100 80"><title>Add</title><path d="M 50 0 a 40 40 0 1 0 40 40 A 40 40 0 0 0 50 0 Z m 0 77 a 37 37 0 1 1 37 -37 a 37 37 0 0 1 -37 37 Z m 1.5 -38.5 H 65 v 3 H 51.5 V 55 h -3 V 41.5 H 35 v -3 h 13.5 V 25 h 3 Z" 
/>     </symbol>     <symbol id="icon-add" 
viewBox="0 0 100 80"><title>Add</title><path d="M 50 6 a 34 34 0 1 1 -34 34 A 34 34 0 0 1 50 6 m 0 -6 a 40 40 0 1 0 40 40 A 40 40 0 0 0 50 0 Z m 20.15 43 v -6 h -40.3 v 6 Z M 53 60.13 V 19.85 h -6 v 40.3 Z" 
/>     </symbol>     <symbol id="icon-approved" 
viewBox="0 0 100 80"><title>Approved</title><path d="M 50 6 a 34 34 0 1 1 -34 34 A 34 34 0 0 1 50 6 m 0 -6 a 40 40 0 1 0 40 40 A 40 40 0 0 0 50 0 Z m 13.91 24.61 L 42.63 45.73 l -8.89 -8.89 l -4.24 4.24 l 13.11 13.11 l 25.53 -25.32 Z" 
/>     </symbol>     <symbol id="icon-attachment" 
viewBox="0 0 100 80"><title>Attachment</title><path d="M 77.1 21.22 v 39.71 A 19.1 19.1 0 0 1 58 80 H 42 a 19.09 19.09 0 0 1 -19.1 -19.07 V 0 H 63 v 54.17 A 8.85 8.85 0 0 1 54.19 63 h -6.38 A 8.85 8.85 0 0 1 39 54.17 V 20 h 6 v 34.17 A 2.85 2.85 0 0 0 47.81 57 h 6.39 a 2.85 2.85 0 0 0 2.8 -2.83 V 6 H 28.9 v 54.93 A 13.09 13.09 0 0 0 42 74 h 16 a 13.09 13.09 0 0 0 13.1 -13.07 V 21.22 Z" 
/>     </symbol>     <symbol id="icon-calendar" 
viewBox="0 0 100 80"><title>Calendar</title><path d="M 70.93 6.62 V 0.31 h -6 v 6.31 H 35.18 V 0.15 h -6 v 6.47 H 10 v 73.21 h 80 V 6.62 Z M 84 73.83 H 16 V 12.62 h 13.18 v 4.54 h 6 v -4.54 h 29.75 v 4.71 h 6 v -4.71 H 84 Z M 29 42.66 h 6 v 6 h -6 Z m 12 0.08 h 6 v 6 h -6 Z m -12 -12 h 6 v 6 h -6 Z m 12 0 h 6 v 6 h -6 Z M 29 54.79 h 6 v 6 h -6 Z m 12 6 l 6 0.06 v -6 h -6 Z m 12 -18.13 h 6 v 6 h -6 Z m 12 0.08 h 6 v 6 h -6 Z m -12 -12 h 6 v 6 h -6 Z m 12 0 h 6 v 6 h -6 Z" 
/>     </symbol>     <symbol id="icon-close" 
viewBox="0 0 100 80"><title>Close</title><path d="M 54.23 40 L 90 75.77 L 85.77 80 L 50 44.23 L 14.23 80 L 10 75.77 L 45.77 40 L 10 4.23 L 14.23 0 L 50 35.77 L 85.77 0 L 90 4.23 Z" 
/>     </symbol>     <symbol id="icon-dark-mode" 
viewBox="0 0 100 80"><title>Dark Mode</title><path d="M 77.77 59.56 c -23.39 0 -42.36 -18.3 -42.36 -40.87 A 39.52 39.52 0 0 1 40.13 0 C 22.7 5.07 10 20.66 10 39.13 C 10 61.7 29 80 52.36 80 A 42.52 42.52 0 0 0 90 57.82 a 43.74 43.74 0 0 1 -12.23 1.74 Z M 52.36 74 C 32.31 74 16 58.36 16 39.13 a 34.17 34.17 0 0 1 14 -27.52 a 45.52 45.52 0 0 0 -0.55 7.08 c 0 25.3 20.79 46 46.68 46.84 A 37.08 37.08 0 0 1 52.36 74 Z" 
/>     </symbol>     <symbol id="icon-dashboard" 
viewBox="0 0 100 80"><title>Dashboard</title><path d="M 90.14 0.13 H 90 V 0 H 10 v 0.13 h -0.14 v 79.74 H 10 V 80 h 80 v -0.13 h 0.14 Z m -6.14 6 v 38.68 H 53 V 6.13 Z m -37 0 v 23.06 H 16 V 6.13 Z M 16 73.87 V 35.19 h 31 v 38.68 Z m 37 0 V 50.81 h 31 v 23.06 Z" 
/>     </symbol>     <symbol id="icon-data-marker" 
viewBox="0 0 100 80"><title>Data Marker</title><path d="M 79.85 37 A 30 30 0 0 0 53 10.15 V 0 h -6 v 10.15 A 30 30 0 0 0 20.15 37 H 10 v 6 h 10.15 A 30 30 0 0 0 47 69.85 V 80 h 6 V 69.85 A 30 30 0 0 0 79.85 43 H 90 v -6 Z M 50 64 a 24 24 0 1 1 24 -24 a 24 24 0 0 1 -24 24 Z m 6 -24 a 6 6 0 1 1 -6 -6 a 6 6 0 0 1 6 6 Z" 
/>     </symbol>     <symbol id="icon-data" 
viewBox="0 0 100 80"><title>Data</title><path d="M 77.91 11.67 v 4 h -8 v -4 Z m 0 30.8 v -4 h -8 v 4 Z m -8 26.4 h 8 v -4 h -8 Z M 90 0 v 80 H 10 V 0 Z M 16 22.53 h 68 V 6 H 16 Z m 0 6 V 51.1 h 68 V 28.53 Z M 84 74 V 57.1 H 16 V 74 Z" 
/>     </symbol>     <symbol id="icon-delete" 
viewBox="0 0 100 80"><title>Delete</title><path d="M 47 33 h 6 v 30 h -6 Z M 32 63 h 6 V 33 h -6 Z m 30 0 h 6 V 33 h -6 Z m 28 -43 h -6 v 60 H 16 V 20 h -6 v -6 h 20 V 0 h 40 v 14 h 20 Z m -54 -6 h 28 V 6 H 36 Z m 42 6 H 22 v 54 h 56 Z" 
/>     </symbol>     <symbol id="icon-download" 
viewBox="0 0 100 80"><title>Download</title><path d="M 90 0 v 80 H 10 V 0 h 20.53 v 6 H 16 v 68 h 68 V 6 H 69.47 V 0 Z M 46.52 54.75 l 3.87 3.88 l 3.87 -3.88 L 66.39 42.6 H 54.32 V 0.08 h -8 V 42.6 H 34.39 Z" 
/>     </symbol>     <symbol id="icon-filter" 
viewBox="0 0 100 80"><title>Filter</title><path d="M 30.9 55.75 a 12 12 0 0 0 -11.57 9 H 10 v 6 h 9.32 a 11.94 11.94 0 0 0 23.15 0 H 90 v -6 H 42.47 a 12 12 0 0 0 -11.57 -9 Z m 0 18 a 6 6 0 1 1 6 -6 a 6 6 0 0 1 -6 6 Z m 38 -45.31 a 12 12 0 0 0 -11.57 9 H 10 v 6 h 47.31 a 11.94 11.94 0 0 0 23.15 0 H 90 v -6 h -9.55 a 12 12 0 0 0 -11.57 -9 Z m 0 18 a 6 6 0 1 1 6 -6 a 6 6 0 0 1 -6.02 6 Z M 60.46 9.25 a 11.94 11.94 0 0 0 -23.15 0 H 10 v 6 h 27.31 a 11.94 11.94 0 0 0 23.15 0 H 90 v -6 Z m -11.57 9 a 6 6 0 1 1 6 -6 a 6 6 0 0 1 -6.01 6 Z" 
/>     </symbol>     <symbol id="icon-focal-point" 
viewBox="0 0 100 80"><title>Focal Point</title><path d="M 84 50 h 6 v 30 H 60 v -6 h 24 Z m -68 0 h -6 v 30 h 30 v -6 H 16 Z m 0 -44 h 24 V 0 H 10 v 30 h 6 Z m 68 -6 H 60 v 6 h 24 v 24 h 6 V 0 Z M 70.15 42.86 v -6 h -17 v -17 h -6 v 17 h -17 v 6 h 17 v 17 h 6 v -17 Z" 
/>     </symbol>     <symbol id="icon-fullscreen" 
viewBox="0 0 100 80"><title>Fullscreen</title><path d="M 80.16 65.81 l 9.72 -9.72 V 80 H 66 l 10 -10 l -18 -18 l 4.23 -4.23 Z m -42.33 -18 l -18 18 l -9.72 -9.72 V 80 H 34 L 24 70 l 18 -18 Z M 34 0 H 10.12 v 23.91 l 9.72 -9.72 l 18 18 l 4.23 -4.23 l -18 -18 Z m 50.76 0 H 66 l 10 10 l -18 18 l 4.23 4.23 l 18 -18 l 9.72 9.72 V 0 Z" 
/>     </symbol>     <symbol id="icon-grid-view" 
viewBox="0 0 100 80"><title>Grid View</title><path d="M 38.35 6 v 22.29 H 16.47 V 6 h 21.88 m 6 -6 H 10.47 v 34.29 h 33.88 V 0 Z m -6 51.68 V 74 H 16.47 V 51.71 h 21.88 m 6 -6 H 10.47 V 80 h 33.88 V 45.71 Z M 83.53 6 v 22.29 H 61.65 V 6 h 21.88 m 6 -6 H 55.65 v 34.29 h 33.88 V 0 Z m -6 51.68 V 74 H 61.65 V 51.71 h 21.88 m 6 -6 H 55.65 V 80 h 33.88 V 45.71 Z" 
/>     </symbol>     <symbol id="icon-image" 
viewBox="0 0 100 80"><title>Image</title><path d="M 10 0 v 80 h 80 V 0 Z m 74 6 v 51 L 73 45.54 L 57.3 61.81 L 34.71 38.35 L 16 57.55 V 6 Z M 16 74 v -7.86 L 34.68 47 L 57.3 70.46 L 73 54.19 l 11 11.48 V 74 Z m 46 -37.82 a 12.33 12.33 0 1 0 -12.33 -12.33 A 12.34 12.34 0 0 0 62 36.18 Z m 0 -18.66 a 6.33 6.33 0 1 1 -6.33 6.33 A 6.33 6.33 0 0 1 62 17.52 Z" 
/>     </symbol>     <symbol id="icon-launch-screen" 
viewBox="0 0 100 80"><title>Launch Screen</title><path d="M 84 9.4 v 61.2 H 16 V 9.4 h 68 M 90 4 H 10 v 72 h 80 V 4 Z M 37.6 23.75 H 22.4 v 12 h 15.2 Z m 20 0 H 42.4 v 12 h 15.2 Z m 20 0 H 62.4 v 12 h 15.2 Z m -55.2 32 h 15.2 v -12 H 22.4 Z m 35.2 -12 H 42.4 v 12 h 15.2 Z m 20 0 H 62.4 v 12 h 15.2 Z" 
/>     </symbol>     <symbol id="icon-light-mode" 
viewBox="0 0 100 80"><title>Light Mode</title><path d="M 49.77 22 a 17.69 17.69 0 1 0 17.69 17.68 A 17.69 17.69 0 0 0 49.77 22 Z m 0 29.37 a 11.67 11.67 0 1 1 11.67 -11.69 a 11.69 11.69 0 0 1 -11.67 11.67 Z M 53.5 16 h -6 V 0 h 6 Z M 90 37.43 v 6 H 73.42 v -6 Z M 46 63.31 h 6 V 80 h -6 Z M 26.12 42 L 10 41.93 v -6 h 16.12 Z m 5.16 -17.14 L 20 13.47 l 4.26 -4.25 l 11.28 11.35 Z m 37.69 1 l -4.25 -4.27 L 76.47 9.9 l 4.25 4.27 Z M 68 55 l 11.71 11.86 l -4.27 4.24 l -11.75 -11.83 Z m -37.73 -1 l 4.25 4.26 l -11.44 11.39 l -4.25 -4.26 Z" 
/>     </symbol>     <symbol id="icon-list-view" 
viewBox="0 0 100 80"><title>List View</title><path d="M 89.78 19.63 H 34.53 v -8 h 55.25 Z m 0 24.55 H 34.53 v -8 h 55.25 Z m 0 24.18 H 34.53 v -8 h 55.25 Z M 20.22 10.63 h -10 v 10 h 10 Z m 0 24.55 h -10 v 10 h 10 Z m 0 24.18 h -10 v 10 h 10 Z" 
/>     </symbol>     <symbol id="icon-map-view" viewBox="0 0 100 80"><title>Map 
View</title><path d="M 62.76 0.25 L 36.92 6.47 L 10 0.25 V 74 l 26.92 5.78 L 62.76 74 L 90 79.75 V 6.47 Z M 40.13 11.87 l 19.6 -4.72 V 68.5 l -19.6 4.38 Z M 16 7.79 L 34.13 12 v 61 L 16 69.12 Z m 68 64.55 l -18.27 -3.87 V 7.08 L 84 11.25 Z" 
/>     </symbol>     <symbol id="icon-measurements" 
viewBox="0 0 100 80"><title>Measurements</title><path d="M 90 36.08 H 73 V 0 H 27 v 36.08 H 10 v 6 h 17 V 80 h 46 V 42.08 h 17 Z M 67 74 H 33 v -7.17 h 10 v -6 H 33 v -10 h 16.06 v -6 H 33 v -10 h 10 v -6 H 33 v -10 h 16.06 v -6 H 33 V 6 h 34 Z" 
/>     </symbol>     <symbol id="icon-menu" 
viewBox="0 0 100 80"><title>Menu</title><path d="M 10 0.09 h 80 v 11.2 H 10 Z M 90 34.4 H 10 v 11.2 h 80 Z M 10 79.91 h 80 v -11.2 H 10 Z" 
/>     </symbol>     <symbol id="icon-minus" 
viewBox="0 0 100 80"><title>Minus</title><path d="M 90 34 v 12 H 10 V 34 Z" />   
  </symbol>     <symbol id="icon-new-doc" viewBox="0 0 100 80"><title>New 
Doc</title><path d="M 90 0 v 46 h -6 V 6 H 16 v 67.9 h 40 v 6 H 10 V 0 h 80 Z M 76 18 H 24 v 6 h 52 Z M 24 38 h 32 v -6 H 24 Z m 49 2 h -6 v 17 H 50 v 6 h 17 v 17 h 6 V 63 h 17 v -6 H 73 Z" 
/>     </symbol>     <symbol id="icon-notification" 
viewBox="0 0 100 80"><title>Notification</title><path d="M 86.51 64.78 h -7.45 v -21.9 a 29.11 29.11 0 0 0 -22.21 -28.23 a 8.73 8.73 0 0 0 2 -5.48 a 8.82 8.82 0 0 0 -17.64 0 a 8.73 8.73 0 0 0 2 5.48 a 29.12 29.12 0 0 0 -22.29 28.24 v 21.89 h -7.43 v 6 h 26 a 10.62 10.62 0 0 0 21 0 h 26 Z M 50 6.34 a 2.82 2.82 0 1 1 -2.82 2.82 A 2.82 2.82 0 0 1 50 6.34 Z M 26.92 42.88 a 23.08 23.08 0 0 1 46.17 0 v 21.9 H 27 Z" 
/>     </symbol>     <symbol id="icon-plus" 
viewBox="0 0 100 80"><title>Plus</title><path d="M 90 46 H 56 v 34 H 44 V 46 H 10 V 34 h 34 V 0 h 12 v 34 h 34 Z" 
/>     </symbol>     <symbol id="icon-preview" 
viewBox="0 0 100 80"><title>Preview</title><path d="M 89.54 39.09 C 83.16 21.39 67.58 10 49.85 10 c -17.46 0 -33.4 11.71 -39.69 29.14 l -0.31 0.86 l 0.31 0.86 C 16.44 58.25 32.39 70 49.85 70 c 17.73 0 33.31 -11.44 39.69 -29.13 l 0.31 -0.86 Z M 49.85 64 c -14.55 0 -27.9 -9.59 -33.6 -24 c 5.7 -14.41 19.06 -24 33.6 -24 c 14.78 0 27.84 9.38 33.6 24 c -5.76 14.58 -18.82 24 -33.6 24 Z m 0 -40 c -9.43 0 -17.09 7.18 -17.09 16 s 7.67 16 17.09 16 s 17.1 -7.18 17.1 -16 s -7.68 -16 -17.1 -16 Z m 0 26 c -6.12 0 -11.09 -4.49 -11.09 -10 s 5 -10 11.09 -10 s 11.1 4.49 11.1 10 S 56 50 49.85 50 Z" 
/>     </symbol>     <symbol id="icon-profile" 
viewBox="0 0 100 80"><title>Profile</title><path d="M 50 0 a 40 40 0 1 0 39.999 40 a 39.921 39.921 0 0 0 -40 -40 Z M 29.25 66.874 a 20.765 20.765 0 0 1 41.5 -0.001 a 33.77 33.77 0 0 1 -41.5 0 Z m 10.945 -35.725 A 9.805 9.805 0 1 1 50 40.91 a 9.816 9.816 0 0 1 -9.805 -9.761 Z m 35.939 30.566 A 26.892 26.892 0 0 0 60.329 42.98 a 15.646 15.646 0 0 0 5.474 -11.832 a 15.804 15.804 0 1 0 -31.608 0 a 15.644 15.644 0 0 0 5.475 11.833 a 26.893 26.893 0 0 0 -15.804 18.735 a 34.033 34.033 0 0 1 50.406 -45.64 A 33.317 33.317 0 0 1 83.999 40 a 33.84 33.84 0 0 1 -7.865 21.715 Z" 
/>     </symbol>     <symbol id="icon-remove-tag" 
viewBox="0 0 100 80"><title>Remove Tag</title><path d="M 57.11 30 l -7.61 7.61 L 41.88 30 l -2.38 2.39 L 47.12 40 l -7.62 7.61 L 41.88 50 l 7.62 -7.61 L 57.11 50 l 2.39 -2.38 L 51.88 40 l 7.62 -7.61 Z" 
/>     </symbol>     <symbol id="icon-rig" 
viewBox="0 0 100 80"><title>Rig</title><path d="M 53.51 0 H 48 L 13.66 77.57 L 19.14 80 l 3.75 -8.47 L 50 57.3 l 27.45 14.36 l 3.37 7.92 l 5.52 -2.35 Z m 9.67 38 l -6.79 -3.64 l 4.27 -2.29 Z M 50.7 8.75 l 7.6 17.88 L 50 31 l -7.46 -4 Z m -10.54 23.8 l 3.55 1.9 l -5.76 3.09 Z M 26.79 62.72 l 6.32 -14.28 l 10.47 5.48 Z M 50 50.54 l -12 -6.27 l 12 -6.42 l 12 6.42 Z m 6.46 3.38 l 11 -5.74 L 73.75 63 Z" 
/>     </symbol>     <symbol id="icon-search" 
viewBox="0 0 100 80"><title>Search</title><path d="M 90 75.71 l -24.53 -24.5 A 32 32 0 0 0 72 31.74 C 72 14.21 58.14 0 41 0 S 10 14.21 10 31.74 s 13.89 31.74 31 31.74 a 30.46 30.46 0 0 0 20.44 -7.91 L 85.92 80 Z M 41 57.49 c -13.88 0 -25.17 -11.55 -25.17 -25.75 S 27.14 6 41 6 s 25.18 11.54 25.18 25.74 S 54.89 57.49 41 57.49 Z" 
/>     </symbol>     <symbol id="icon-settings-small" 
viewBox="0 0 100 80"><title>Settings</title><path d="M 59 69 H 40.91 v -7 a 24.13 24.13 0 0 1 -5.81 -3.43 L 30 62.24 L 19.58 47.4 l 6.7 -4.69 a 23.78 23.78 0 0 1 -0.16 -2.71 a 23.09 23.09 0 0 1 0.29 -3.63 L 20.18 32 l 10.39 -14.84 l 5.23 3.67 a 23.56 23.56 0 0 1 5 -2.88 V 11 H 59 v 6.92 a 24.13 24.13 0 0 1 5.27 3 l 5.28 -3.69 L 79.89 32 l -6.3 4.41 a 22.93 22.93 0 0 1 0.29 3.59 a 23.71 23.71 0 0 1 -0.15 2.62 l 6.69 4.69 L 70 62.15 l -5 -3.55 a 24 24 0 0 1 -6 3.5 Z m -12.09 -6 H 53 v -5.24 l 2.13 -0.64 a 18 18 0 0 0 7.46 -4.46 l 1.78 -1.78 l 4.16 2.91 l 3.51 -5 l -4.9 -3.43 l 0.38 -1.91 a 17.25 17.25 0 0 0 -0.19 -7.64 l -0.49 -2 l 4.67 -3.27 l -3.51 -5 l -4.2 2.94 l -1.8 -1.65 a 18 18 0 0 0 -7 -4 l -2 -0.6 V 17 h -6.16 v 5.31 l -2.11 0.65 A 17.7 17.7 0 0 0 38 26.81 l -1.8 1.62 l -4.2 -2.91 l -3.51 5 l 4.61 3.23 l -0.49 2 a 17.41 17.41 0 0 0 -0.19 7.76 l 0.38 1.92 l -4.92 3.44 l 3.51 5 l 4.21 -3 l 1.78 1.76 a 18 18 0 0 0 7.36 4.41 l 2.12 0.65 Z M 50 36.52 A 3.48 3.48 0 1 1 46.52 40 a 3.39 3.39 0 0 1 0.48 -1.82 l 0.2 -0.18 a 3.45 3.45 0 0 1 2.8 -1.48 m 0 -6 a 9.46 9.46 0 0 0 -7.64 3.89 l -0.31 0.44 a 9.47 9.47 0 1 0 8 -4.34 Z" 
/>     </symbol>     <symbol id="icon-settings" 
viewBox="0 0 100 80"><title>Settings</title><path d="M 81.22 46.11 a 31 31 0 0 0 -0.33 -13.61 l 8.3 -5.81 L 78.6 11.56 l -7.14 5 a 31.78 31.78 0 0 0 -12.38 -7 V 0.3 H 40.61 v 9.29 a 31.76 31.76 0 0 0 -12 6.93 l -7.08 -5 l -10.61 15.17 l 8.2 5.75 a 31.1 31.1 0 0 0 -0.32 13.8 L 10 52.4 l 10.6 15.13 l 7 -4.93 a 31.84 31.84 0 0 0 13.1 7.84 v 9.26 h 18.49 v -9.24 a 31.85 31.85 0 0 0 13.27 -7.94 l 6.94 4.86 L 90 52.25 Z M 77.93 59 l -2 -1.42 l -4.12 -2.89 l -3.56 3.55 a 25.93 25.93 0 0 1 -10.77 6.44 L 53.19 66 v 7.7 h -6.47 V 66 l -4.25 -1.3 a 25.94 25.94 0 0 1 -10.63 -6.36 l -3.56 -3.53 l -4.1 2.88 l -2.11 1.48 l -3.71 -5.3 l 3.88 -2.72 l 3.21 -2.25 l -0.77 -3.84 a 25.11 25.11 0 0 1 0.32 -11.2 l 1 -4 l -3.36 -2.35 l -3.29 -2.31 L 23 19.92 l 2.17 1.52 l 3.94 2.76 l 3.53 -3.2 a 25.6 25.6 0 0 1 9.74 -5.63 L 46.61 14 V 6.3 h 6.47 V 14 l 4.29 1.28 A 26 26 0 0 1 67.4 21 l 3.6 3.24 l 3.94 -2.76 l 2.23 -1.56 l 3.71 5.3 l -3.38 2.37 l -3.36 2.35 l 1 4 a 25.49 25.49 0 0 1 0.68 6.06 a 25.89 25.89 0 0 1 -0.49 5 l -0.75 3.83 l 3.2 2.17 l 3.86 2.71 Z M 50 27.36 a 12.62 12.62 0 0 0 -10.19 5.19 l -0.41 0.59 A 12.63 12.63 0 1 0 50 27.36 Z m 0 19.29 a 6.63 6.63 0 0 1 -5.62 -10.17 l 0.26 -0.38 A 6.63 6.63 0 1 1 50 46.64 Z" 
/>     </symbol>     <symbol id="icon-share" 
viewBox="0 0 100 80"><title>Share</title><path d="M 84 48 h 6 v 32 H 10 V 0 h 32 v 6 H 16 v 68 h 68 Z m -50.09 3.86 l 4.24 4.24 l 42.64 -42.64 L 90 22.68 V 0 H 67.37 l 9.17 9.17 Z" 
/>     </symbol>     <symbol id="icon-tools" 
viewBox="0 0 100 80"><title>Tools</title><path d="M 90 39.62 H 67.17 V 0 H 32.83 v 39.62 H 10 v 5.94 h 22.83 v 16.85 L 50 80 l 17.17 -17.59 V 45.56 H 90 Z m -28.83 5.22 l -22.35 8.6 V 44 l 22.35 -8.6 Z m 0 -15.83 l -22.35 8.6 v -9.46 l 22.35 -8.6 Z m 0 -23.07 v 7.24 l -22.35 8.6 V 5.94 Z M 50 71.46 L 38.82 60 v -0.2 l 22.35 -8.6 V 60 Z" 
/>     </symbol>     <symbol id="icon-well" 
viewBox="0 0 100 80"><title>Well</title><path d="M 89.84 14.13 V 80 H 10.16 V 14.13 h 22 v 6 h -16 V 74 h 67.71 V 20.1 h -16 v -6 Z M 47 44.38 h -7.32 V 0 h 20.65 v 44.38 H 53 v 25.49 h -6 Z m -1.36 -6 h 8.7 V 6 h -8.7 Z" 
/>     </symbol>     <symbol id="input-checkbox" viewBox="0 0 15 15"><path 
fill="#fff" d="M 12.66 4.06 L 6.28 10.4 L 3 7.12 l 1.06 -1.07 l 2.22 2.23 L 11.6 3 Z" 
/>     </symbol>     <symbol id="input-error" viewBox="0 0 15 15"><path fill="#ff5a5a" 
d="M 8.34 10.44 a 0.84 0.84 0 1 1 -0.84 -0.84 a 0.84 0.84 0 0 1 0.84 0.84 Z m -0.09 -6.68 h -1.5 V 8 h 1.5 Z M 15 7.5 A 7.5 7.5 0 1 1 7.5 0 A 7.5 7.5 0 0 1 15 7.5 Z m -1.5 0 a 6 6 0 1 0 -6 6 a 6 6 0 0 0 6 -6 Z" 
/>     </symbol>     <symbol id="site-download-hover" viewBox="0 0 20 20"><path 
fill="#136fd5" d="M 20 0 v 20 H 0 V 0 h 5.13 v 1.5 H 1.5 v 17 h 17 v -17 h -3.63 V 0 Z M 9.13 13.69 l 1 1 l 1 -1 l 3 -3 h -3 V 0 h -2 v 10.65 h -3 Z" 
/>     </symbol>     <symbol id="site-download" viewBox="0 0 20 20"><path fill="#1683fb" 
d="M 20 0 v 20 H 0 V 0 h 5.13 v 1.5 H 1.5 v 17 h 17 v -17 h -3.63 V 0 Z M 9.13 13.69 l 1 1 l 1 -1 l 3 -3 h -3 V 0 h -2 v 10.65 h -3 Z" 
/>     </symbol>     <symbol id="user-identity" viewBox="0 0 30 30"><path d="M 15 0 a 15 15 0 1 0 15 15 A 15 15 0 0 0 15 0 Z M 6.82 25.71 A 8.48 8.48 0 0 1 15 17.22 a 8.48 8.48 0 0 1 8.18 8.49 a 13.4 13.4 0 0 1 -16.37 0 Z m 4.13 -14 a 4.05 4.05 0 1 1 4.05 4 a 4.06 4.06 0 0 1 -4.05 -4.03 Z m 13.65 12.8 a 10.18 10.18 0 0 0 -6.5 -8.21 a 5.55 5.55 0 1 0 -6.19 0 a 10.18 10.18 0 0 0 -6.5 8.21 a 13.51 13.51 0 0 1 19.23 -19 A 13.24 13.24 0 0 1 28.5 15 a 13.45 13.45 0 0 1 -3.91 9.48 Z" 
/>     </symbol></svg>
<DIV class="navigation-framework">
  <topnav></topnav>
  <DIV class="framework-content">
  <sidebar></sidebar><mainnav></mainnav></DIV></DIV>

  
   `
 // templateUrl: '/app/dashboardView.html'
})
export class AppComponent  { name = 'Angular'; }
