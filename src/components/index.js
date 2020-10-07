import "../css/styles.css";
import "../scss/styles.scss";

import { modal } from './modal/modal';
import { scrollSite } from './scroll/scroll';
import { changeAvatar } from './avatar/avatar';
import { createNetworks } from './modal/networks';
import { req } from './formdata/form';
import { initMap } from './map/maps';
import { menu } from './mediamenu/mediamenu';
import { slider } from './slider/slider';




scrollSite();
slider();
menu();
modal();
changeAvatar();
//createNetworks();
req();
console.log("hello world!");
//initMap();