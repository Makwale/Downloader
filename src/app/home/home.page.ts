import { Component } from '@angular/core';
import { NotificationVisibility } from '@ionic-native/downloader/ngx';
import { DownloadRequest } from '@ionic-native/downloader/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private downloader: Downloader) {}
  
  download(){
    var request: DownloadRequest = {
      uri: 'https://cdn.images.express.co.uk/img/dynamic/130/590x/modern-gentleman-qualities-traits-manners-respectful-kind-polite-841392.jpg',
      title: 'MyDownload',
      description: '',
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
          dirType: 'Downloads',
          subPath: 'MyFile.apk'
      }
  };


  this.downloader.download(request)
          .then((location: string) => alert('File downloaded at: '+ location))
          .catch((error: any) => alert(error.message));
  }

}
