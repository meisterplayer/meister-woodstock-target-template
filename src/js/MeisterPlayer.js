import Meister from '@npm-wearetriple/meisterplayer/index';
import BaseMedia from '@npm-wearetriple/meister-plugin-basemedia/index';
import Html5Player from '@npm-wearetriple/meister-plugin-html5player/index';
import StandardUi from '@npm-wearetriple/meister-plugin-standardui/index';
import DebugOverlay from '@npm-wearetriple/meister-plugin-debugoverlay/index';
import NativeHls from '@npm-wearetriple/meister-plugin-nativehls/index';
import Hls from '@npm-wearetriple/meister-plugin-hls/index';
import Dash from '@npm-wearetriple/meister-plugin-dash/index';
import MultiSource from '@npm-wearetriple/meister-plugin-multisource/index';
import WebVtt from '@npm-wearetriple/meister-plugin-webvtt/index';
import Smooth from '@npm-wearetriple/meister-plugin-smooth/index';



Meister.builtIn = {
    [RtlPlayer.pluginName]: {},
    [BaseMedia.pluginName]: {},
    [StandardUi.pluginName]: {},
    [NativeHls.pluginName]: {},
    [Hls.pluginName]: {},
    [Dash.pluginName]: {},
    [MultiSource.pluginName]: {},
    [WebVtt.pluginName]: {},
    [Smooth.pluginName]: {},
    [DebugOverlay.pluginName]: {}
};

Meister.Configuration.overwrite(Meister.builtIn);
