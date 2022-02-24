import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import Hls from 'hls.js';
import videojs from 'video.js';
/* import Hls from 'cdnbye'; */

// import 'cdnbye/dist/hlsjs-p2p-engine.min.js';
// import 'cdnbye/dist/videojs-hlsjs-plugin.min.js';
// import 'cdnbye/dist/videojs-hlsjs-plugin.min.js';

import P2PEngine from 'cdnbye/dist/hlsjs-p2p-engine.min.js';
/* import 'cdnbye/dist/videojs-hlsjs-plugin.min.js'; */
/* import 'videojs-contrib-hls'; */
import 'videojs-hlsjs-plugin';
/* const videojsHlsjsSourceHandler = require('videojs-hlsjs-plugin');
videojsHlsjsSourceHandler.register(videojs); */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
  title = 'dooball';
  // public vjs: videojs.Player;
  @ViewChild('my_video')
  private element: ElementRef;

  options = {
    controls: true,
    autoplay: false,
    fluid: false,
    loop: false,
    html5: {
      hlsjsConfig: {
        // Put your hls.js config here
        debug: true,
        maxBufferSize: 0,
        maxBufferLength: 10,
        liveSyncDurationCount: 10,
      },
    },
  };

  sources = {
    src: 'https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8',
    type: 'application/x-mpegURL',
  };

  player: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // instantiate Video.js
    /* this.player = videojs(
      this.target.nativeElement,
      this.options,
      function onPlayerReady() {
        console.log('onPlayerReady', this);
      }
    ); */

    console.log(window.videojs);

    videojs.Html5Hlsjs.addHook(
      'beforeinitialize',
      (videojsPlayer, hlsjsInstance) => {
        if (P2PEngine.isSupported()) {
          var engine = new P2PEngine(hlsjsInstance, {
            getStats: function (
              totalP2PDownloaded,
              totalP2PUploaded,
              totalHTTPDownloaded
            ) {
              var total = totalHTTPDownloaded + totalP2PDownloaded;
              document.querySelector(
                '#info'
              ).innerText = `p2p ratio: ${Math.round(
                (totalP2PDownloaded / total) * 100
              )}%, saved traffic: ${totalP2PDownloaded}KB, uploaded: ${totalP2PUploaded}KB`;
            },
          });
        }
      }
    );

    this.player = videojs(this.element.nativeElement, this.options, () => {});
    this.player.src(this.sources);
  }

  ngOnDestroy() {
    // destroy player
    /* if (this.player) {
      this.player.dispose();
    } */
  }

  ngOnChanges(changes: any): void {
    /* if (this.player) {
      this.hasChecked = false;
      this.customPlaylist = this.videoSource;
      this.currentVideo = this.customPlaylist[0];
      this.player.src(this.currentVideo.source);
      this.player.poster(this.currentVideo.poster);

      this.player.on('ended', () => {
        if (this.customPlaylist.length > 1) {
          this.hasChecked = false;
          this.currentVideo = this.customPlaylist[1];
          this.player.src(this.currentVideo.source);
          this.player.poster(this.currentVideo.poster);
          this.player.play();
        }
      });
    } */
  }
}
