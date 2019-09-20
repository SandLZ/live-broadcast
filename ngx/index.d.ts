import { IonicNativePlugin } from '@ionic-native/core';
export declare class HMLiveBroadcast extends IonicNativePlugin {
    startLiveBroadcast(options: HMLiveBroadcastOptions, success?: SuccessCallback<any>, error?: ErrorCallback<any>): Promise<any>;
}
export interface HMLiveBroadcastOptions {
    title: string;
    needTitle: boolean;
    autoPlay: boolean;
    type: number;
    isViewer: boolean;
    playUrl: string;
    pushUrl: string;
    userName: string;
    debug: boolean;
    cameraDefault: number;
    decodeDefault: boolean;
    focusDefault: boolean;
    resolutionDefault: number;
}
export declare type SuccessCallback<T> = (result?: T) => void;
export declare type ErrorCallback<T> = (result?: T) => void;
