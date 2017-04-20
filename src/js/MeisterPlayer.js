import Meister from 'meisterplayer/index';
import BaseMedia from 'meister-plugin-basemedia/index';
import Html5Player from 'meister-plugin-html5player/index';
import StandardUi from 'meister-plugin-standardui/index';
import DebugOverlay from 'meister-plugin-debugoverlay/index';
import NativeHls from 'meister-plugin-nativehls/index';
import Hls from 'meister-plugin-hls/index';
import Dash from 'meister-plugin-dash/index';
import MultiSource from 'meister-plugin-multisource/index';
import WebVtt from 'meister-plugin-webvtt/index';
import Smooth from 'meister-plugin-smooth/index';



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
