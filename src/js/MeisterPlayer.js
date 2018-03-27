import 'babel-polyfill';
import Meister from '@meisterplayer/meisterplayer/index';
import BaseMedia from '@meisterplayer/plugin-basemedia/index';
import Html5Player from '@meisterplayer/plugin-html5player/index';
import DebugOverlay from '@meisterplayer/plugin-debugoverlay/index';
import NativeHls from '@meisterplayer/plugin-nativehls/index';
import Hls from '@meisterplayer/plugin-hls/index';
import Dash from '@meisterplayer/plugin-dash/index';
import MultiSource from '@meisterplayer/plugin-multisource/index';
import WebVtt from '@meisterplayer/plugin-webvtt/index';
import Watermark from  '@meisterplayer/plugin-watermark';
import HtmlUI from '@meisterplayer/plugin-htmlui';

Meister.builtIn = {
    [Html5Player.pluginName]: {},
    [BaseMedia.pluginName]: {},
    [NativeHls.pluginName]: {},
    [Hls.pluginName]: {},
    [Dash.pluginName]: {},
    [MultiSource.pluginName]: {},
    [WebVtt.pluginName]: {},
    [DebugOverlay.pluginName]: {},
    [HtmlUI.pluginName]: {},
    [Watermark.pluginName]: {
        iconUrl: 'https://www.meisterplayer.com/static/media/logotype-meister-invert-mini.png',
        style: {
            maxWidth: '65px',
        },
    },
};

Meister.Configuration.overwrite(Meister.builtIn);
