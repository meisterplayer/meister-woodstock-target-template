import Meister from '@meisterplayer/meisterplayer/index';
import BaseMedia from '@meisterplayer/plugin-basemedia/index';
import Html5Player from '@meisterplayer/plugin-html5player/index';
import StandardUi from '@meisterplayer/plugin-standardui/index';
import DebugOverlay from '@meisterplayer/plugin-debugoverlay/index';
import NativeHls from '@meisterplayer/plugin-nativehls/index';
import Hls from '@meisterplayer/plugin-hls/index';
import Dash from '@meisterplayer/plugin-dash/index';
import MultiSource from '@meisterplayer/plugin-multisource/index';
import WebVtt from '@meisterplayer/plugin-webvtt/index';
import Smooth from '@meisterplayer/plugin-smooth/index';



Meister.builtIn = {
    [Html5Player.pluginName]: {},
    [BaseMedia.pluginName]: {},
    [StandardUi.pluginName]: {},
    [NativeHls.pluginName]: {},
    [Hls.pluginName]: {},
    [Dash.pluginName]: {},
    [MultiSource.pluginName]: {},
    [WebVtt.pluginName]: {},
    [Smooth.pluginName]: {},
    [DebugOverlay.pluginName]: {},
};

Meister.Configuration.overwrite(Meister.builtIn);
